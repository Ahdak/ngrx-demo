import {Component, OnInit} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  users: User[] = [];

  constructor() {}

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.users.push(user);
  }
}
