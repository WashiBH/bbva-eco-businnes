import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HomeComponent } from './inicio/home/home.component';
import { LoginSiginComponent, LoguearseSiginComponent } from './login/login-sigin/login-sigin.component';
import { ShowMisArtefactosComponent } from './mis-artefactos/show-mis-artefactos/show-mis-artefactos.component';
import { PagarSuministrosComponent } from './pago-suministro/pagar-suministros/pagar-suministros.component';
import { RegistrarPymeComponent } from './registro/registrar-pyme/registrar-pyme.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginSiginComponent },
  { path: 'iniciar-sesion', component: LoguearseSiginComponent },
  { path: 'bienvenido', component: HomeComponent },
  { path: 'registrarse', component: RegistrarPymeComponent },
  { path: 'chat-dialog', component: ChatDialogComponent },
  { path: 'mis-artefactos', component: ShowMisArtefactosComponent },
  { path: 'pagar-suministros', component: PagarSuministrosComponent },
	{ path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
