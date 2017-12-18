import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {userReducer} from './store/app.reducer';
import {APP_CONFIG} from './shared/app-config';
import {AppEffects} from './store/app.effects';
import {UriBuilderService} from './shared/uri-builder.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({users: userReducer}),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    {provide: APP_CONFIG, useValue: environment.config},
    UriBuilderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
