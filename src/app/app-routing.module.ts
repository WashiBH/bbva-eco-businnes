import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSiginComponent } from './login/login-sigin/login-sigin.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
	{ path: 'login', component: LoginSiginComponent },
	{ path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
