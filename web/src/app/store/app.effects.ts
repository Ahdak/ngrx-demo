import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import {Store} from '@ngrx/store';
import {UriBuilderService} from '../shared/uri-builder.service';
import {AppState, getUsers} from './index';
import {User} from '../user';
import {LOAD_USERS, LoadUsersActionCompleted, SAVE_USERS} from './app.actions';

@Injectable()
export class AppEffects {

  private loadUsersUrl = 'users/all';
  private saveUsersUrl = 'users/save';

  constructor(private actions: Actions,
              private uriBuilderService: UriBuilderService,
              private httpClient: HttpClient,
              private store: Store<AppState>) {}

  @Effect()
  loadUsers = this.actions.ofType(LOAD_USERS)
    .exhaustMap(
      () => {
        return this.httpClient.get<User[]>(this.uriBuilderService.buildUrl(this.loadUsersUrl))
          .map((users: User[]) => new LoadUsersActionCompleted(users))
          .catch(() => Observable.of(console.log('Error loadUsers')));
      }
    );

  @Effect({dispatch: false})
  saveUsers = this.actions.ofType(SAVE_USERS)
    .withLatestFrom(this.store.select(getUsers))
    .switchMap(([action, users]) => {
      return this.httpClient.post<User[]>(this.uriBuilderService.buildUrl(this.saveUsersUrl), users);
    });
}
