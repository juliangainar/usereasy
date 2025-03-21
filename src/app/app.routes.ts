import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component: UserListComponent},
    {path: "search", component: UserDetailsComponent},
    {path:"", redirectTo: "/home", pathMatch: "full"},
    {path:"**", component: PageNotFoundComponent}
];


