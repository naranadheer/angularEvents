import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserLoginComponent } from './UserLogin.Componenet';
import { ProfileComponent } from './UserProfile.Component';

/* import { HomeComponent } from './';
import { Name2Component } from './'; */


/* const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'path2', component: Name2Component },
    { path: 'path3', component: Name3Component },
    { path: 'path4', component: Name4Component },
    { path: '**', component: PageNotFoundComponent }, */

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
//];


export const UserRoutes = [
    { path: 'userLogin', component: UserLoginComponent },
    { path: 'userProfile', component: ProfileComponent},
    {path: '**', redirectTo: 'userLogin'}
];
