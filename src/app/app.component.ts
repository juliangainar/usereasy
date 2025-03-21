import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './user';
import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'usereasy';
  userService: UserService = inject(UserService);
  userDisplay = false;
  newUser : User = {
    id: 0,
    email: '',
    first_name: "",
    last_name: "",
    avatar: ""
  }

  addUser() {
    this.userDisplay = !this.userDisplay;
    this.userService.addUser(this.newUser);

  }
  switchPopUp(){
    this.userDisplay = !this.userDisplay;
  }
}
