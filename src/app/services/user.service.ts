import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // we declare the API REST URL
  private apiUrl = 'https://reqres.in/api/users';

  // we declare a behavior subject (special type of subject)
  private usersSubject = new BehaviorSubject<User[]>([]);

  // we declare a variable to store this as an observable
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) { }

  // method that gets all the users from the REST API
  getUsers(): void{
    this.http.get<{data: User[]}>(this.apiUrl).subscribe(response => {
      this.usersSubject.next(response.data);
      console.log(response.data);
    })
  }

  // method that gets the user by id


  // method that adds users
  addUser(newUser : User) : void{
    const currentUsers = this.usersSubject.value;
    currentUsers.push(newUser);
    this.usersSubject.next(currentUsers);  }
}
