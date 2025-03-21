import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../user';
import { NgFor } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {

  userService: UserService = inject(UserService);
  users: User[] = [];

  constructor(){}

  ngOnInit() {
    // Suscribirse al observable para obtener los usuarios
    this.userService.users$.subscribe(users => {
      this.users = users;
    });

    // Llamamos al método para cargar usuarios
    this.userService.getUsers();
  }
}
