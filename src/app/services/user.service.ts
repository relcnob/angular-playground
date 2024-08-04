import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = ['John', 'Jane', 'Jack'];

  getUsers() {
    return this.users;
  }

  getUser(index: number) {
    return this.users[index];
  }
}
