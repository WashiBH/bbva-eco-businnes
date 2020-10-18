import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PagoSuministro } from '../suministro-class/suministro.model';

@Component({
  selector: 'pagar-suministros',
  templateUrl: './pagar-suministros.component.html',
  styleUrls: ['./pagar-suministros.component.css']
})
export class PagarSuministrosComponent implements OnInit {

  public form: FormGroup;
  public pagoSuministro: PagoSuministro;

  constructor(
    private builder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pagoSuministro = <PagoSuministro>JSON.parse(localStorage.getItem('pagoSuministro'));
    if(!this.pagoSuministro){
      this.pagoSuministro = new PagoSuministro();
    }
    this.buildForm();
    if(this.pagoSuministro){
      this.form.setValue(this.pagoSuministro);
    }
  }

  buildForm(){
    this.form = this.builder.group({
      emisor: [null],
      suministro: [null, Validators.required],
      cuentaOrigen: [null, Validators.required],
      monto: [null, Validators.required],
      referencia: [null, Validators.required]
    });
  }

  registrar(pagoSuministro: PagoSuministro){
    let listPagosSuministros: Array<PagoSuministro> = <Array<PagoSuministro>>JSON.parse(localStorage.getItem('listPagosSuministros'));
    if(!listPagosSuministros){
      listPagosSuministros = [];
    }
    listPagosSuministros.push(this.pagoSuministro);
    localStorage.setItem('listPagosSuministros',JSON.stringify(listPagosSuministros));
    localStorage.setItem('pagoSuministro',JSON.stringify(this.pagoSuministro));
    this.router.navigateByUrl('/bienvenido');
  }

  /* openDialog(): void {
    const dialogRef = this.dialog.open(RegistroPymeDialog, {
      width: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('/chat-dialog');
    });
  } */

}
