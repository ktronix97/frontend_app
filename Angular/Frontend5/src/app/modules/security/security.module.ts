import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [LoginComponent, LogoutComponent, ResetPasswordComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent]
})
export class SecurityModule { }
