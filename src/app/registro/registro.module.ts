import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarPymeComponent, RegistroPymeDialog } from './registrar-pyme/registrar-pyme.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialogModule } from '@angular/material/dialog'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrarPymeComponent, RegistroPymeDialog],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule
  ]
})
export class RegistroModule { }
