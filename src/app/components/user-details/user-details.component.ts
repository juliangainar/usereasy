import { UserService } from './../../services/user.service';
import { Component, inject } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";

@Component({
  selector: 'app-user-details',
  imports: [UserListComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userService : UserService = inject(UserService); 
  userId : string = "";

  getUserByID(): void{
    this.userService.getUserById(this.userId);
  }
}
