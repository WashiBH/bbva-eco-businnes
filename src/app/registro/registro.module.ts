import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarPymeComponent } from './registrar-pyme/registrar-pyme.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrarPymeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ]
})
export class RegistroModule { }
