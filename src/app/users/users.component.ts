import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Output() usersAdded = new EventEmitter<User[]>();
  newUser: User = { firstName: '', lastName: '', dateOfBirth: new Date(), phoneNumber: '', email: '' };
  users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
    this.usersAdded.emit(this.users);
    this.newUser = { firstName: '', lastName: '', dateOfBirth: new Date(), phoneNumber: '', email: '' };
  }
}


