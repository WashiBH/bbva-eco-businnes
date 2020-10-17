import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSiginComponent } from './login-sigin/login-sigin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

const COMPONENTS = [
  LoginSiginComponent
];

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MatCardModule
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    MODULES
  ],
  exports: [COMPONENTS, MODULES]
})
export class LoginModule { }
