import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/login/login-class/user.model';

@Component({
  selector: 'registrar-pyme',
  templateUrl: './registrar-pyme.component.html',
  styleUrls: ['./registrar-pyme.component.css']
})
export class RegistrarPymeComponent implements OnInit {

  public form: FormGroup;
  public entidad: Entidad;

  constructor(
    private builder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.entidad = <Entidad>JSON.parse(localStorage.getItem('entidad'));
    console.log(this.entidad);
    this.buildForm();
    if(this.entidad){
      this.form.setValue(this.entidad);
    }
  }

  buildForm(){
    this.form = this.builder.group({
      nroTarjeta: [null, Validators.required],
      ruc: [null],
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

  registrar(entidad: Entidad){
    let ruc = this.entidad.ruc;
    this.entidad = entidad;
    this.entidad.ruc = ruc;
    let listEntidades = <Array<Entidad>>JSON.parse(localStorage.getItem('listEntidades'));
    listEntidades.push(this.entidad);
    localStorage.setItem('listEntidades',JSON.stringify(listEntidades));
    localStorage.setItem('entidad',JSON.stringify(this.entidad));
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistroPymeDialog, {
      width: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('/chat-dialog');
    });
  }
}

@Component({
  selector: 'registro-pyme-dialog',
  templateUrl: 'registro-pyme-dialog.component.html',
})
export class RegistroPymeDialog {

  public ok = true;

  constructor(
    public dialogRef: MatDialogRef<RegistroPymeDialog>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}