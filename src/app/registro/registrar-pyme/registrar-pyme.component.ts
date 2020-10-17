import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registrar-pyme',
  templateUrl: './registrar-pyme.component.html',
  styleUrls: ['./registrar-pyme.component.css']
})
export class RegistrarPymeComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.builder.group({
      nroTarjeta: [null, Validators.required],
      claveWeb: [null, Validators.required],
      consumoLuz: [null, Validators.required],
      consumoAgua: [null, Validators.required],
      consumoGas: [null, Validators.required],
      correo: [null, Validators.required],
      telefono: [null, Validators.required],
      usuario: [null, Validators.required],
      password: [null, Validators.required],
      repeatPassword: [null, Validators.required]
    });
  }
}
