import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './app.store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({users: userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
