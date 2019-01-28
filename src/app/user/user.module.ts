import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './UserLogin.Componenet';
import { ProfileComponent } from './UserProfile.Component';
import { UserRoutes } from './user.route';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserLoginComponent, ProfileComponent],
  imports: [ CommonModule, RouterModule.forChild(UserRoutes), FormsModule , ReactiveFormsModule],
  exports: [],
  providers: [],
})
export class UserModule {}


