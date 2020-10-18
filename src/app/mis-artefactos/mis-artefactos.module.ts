import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMisArtefactosComponent } from './show-mis-artefactos/show-mis-artefactos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ShowMisArtefactosComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class MisArtefactosModule { }
