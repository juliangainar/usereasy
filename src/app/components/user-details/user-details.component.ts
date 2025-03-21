import { UserService } from './../../services/user.service';
import { Component, inject } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";
import { User } from '../../user';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [UserListComponent, FormsModule, NgFor],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent{
  userService : UserService = inject(UserService); 
  userId : string = "";
  user : User[] = [];

  getUserByID(): void{
    // Suscribirse al observable para obtener los usuarios
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
    this.userService.getUserById(this.userId);
    console.log(this.user);
  }
}
