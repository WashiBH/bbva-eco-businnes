import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialog, LoginSiginComponent, LoguearseSiginComponent } from './login-sigin/login-sigin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const COMPONENTS = [
  LoginSiginComponent,
  LoginDialog,
  LoguearseSiginComponent
];

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatDialogModule
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    MODULES
  ],
  exports: [COMPONENTS, MODULES]
})
export class LoginModule { }
