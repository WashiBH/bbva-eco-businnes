import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { LoginSiginComponent, LoguearseSiginComponent } from './login/login-sigin/login-sigin.component';
import { RegistrarPymeComponent } from './registro/registrar-pyme/registrar-pyme.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginSiginComponent },
  { path: 'iniciar-sesion', component: LoguearseSiginComponent },
  { path: 'bienvenido', component: HomeComponent },
  { path: 'registrarse', component: RegistrarPymeComponent },
	{ path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
