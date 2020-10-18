import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User, RUCS_REGISTRADOS, LISTA_USUARIOS, Entidad } from '../login-class/user.model';

@Component({
  selector: 'login-sigin',
  templateUrl: './login-sigin.component.html',
  styleUrls: ['./login-sigin.component.css']
})
export class LoginSiginComponent implements OnInit {

  public listEntidades: Array<Entidad> = [];
  public form: FormGroup;

  constructor(
    private builder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { 
    this.listEntidades = <Array<Entidad>>JSON.parse(localStorage.getItem('listEntidades'));
    if(this.listEntidades === null || this.listEntidades.length === 0){
      this.listEntidades = [];
      localStorage.setItem('listEntidades',JSON.stringify([]));
    }
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.builder.group({
      ruc: [null, Validators.required]
    });
  }

  onRuc(ruc: string){
    if(ruc !== null && ruc.length === 11){
      if(this.existeRuc(ruc)){
        this.router.navigate(['/iniciar-sesion']);
      } else {
        this.openDialog(ruc);
      }
    }else{
      alert('RUC INVALIDO');
    }
  }

  openDialog(ruc: string): void {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let entidad: Entidad = new Entidad();
        entidad.ruc = ruc;
        localStorage.setItem('entidad',JSON.stringify(entidad));
        this.router.navigateByUrl('/registrarse');
        //this.router.navigate(["../registrarse"]);
      }
    });
  }

  existeRuc(ruc: string): boolean {
    let exists: boolean = false;
    const data = this.listEntidades.find(data => data.ruc === ruc);
    if(data) exists = true;
    return exists;
  }
}

@Component({
  selector: 'loguearse-sigin',
  templateUrl: './loguearse-sigin.component.html',
  styleUrls: ['./login-sigin.component.css']
})
export class LoguearseSiginComponent implements OnInit {

  public listUsers = LISTA_USUARIOS;
  public form: FormGroup;

  constructor(
    private builder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.builder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onLogin(user: User){
    if(this.existeUsuario(user)){
      this.router.navigate(['/bienvenido']);
    }else{
      alert('USUARIO INVALIDO');
    }
  }

  existeUsuario(user: User): boolean {
    let exists: boolean = false;
    const data = this.listUsers.find(data => data.password === user.password && data.email === user.email);
    if(data) exists = true;
    return exists;
  }
}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.component.html',
})
export class LoginDialog {

  public ok = true;

  constructor(
    public dialogRef: MatDialogRef<LoginDialog>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
