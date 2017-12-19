import {Action} from '@ngrx/store';
import {User} from '../user';

/** Actions **/
export const ADD_USER = 'ADD_USER';
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_COMPLETED = 'LOAD_USERS_COMPLETED';
export const SAVE_USERS = 'SAVE_USERS';

export class AddUserAction implements Action {
  readonly type: string = ADD_USER;
  constructor(public payload: User) {}
}
export class LoadUsersAction implements Action {
  readonly type: string = LOAD_USERS;
}
export class LoadUsersActionCompleted implements Action {
  readonly type: string = LOAD_USERS_COMPLETED;
  constructor(public payload: User[]) {}
}
export class SaveUsersAction implements Action {
  readonly type: string = SAVE_USERS;
}
