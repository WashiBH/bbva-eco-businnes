import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'show-mis-artefactos',
  templateUrl: './show-mis-artefactos.component.html',
  styleUrls: ['./show-mis-artefactos.component.css']
})
export class ShowMisArtefactosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openPage(){
    this.router.navigateByUrl('/bienvenido');
  }
}
