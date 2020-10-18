import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagarSuministrosComponent } from './pagar-suministros/pagar-suministros.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [PagarSuministrosComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatStepperModule
  ]
})
export class PagoSuministroModule { }
