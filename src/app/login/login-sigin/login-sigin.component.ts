import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../login-class/user.model';

@Component({
  selector: 'login-sigin',
  templateUrl: './login-sigin.component.html',
  styleUrls: ['./login-sigin.component.css']
})
export class LoginSiginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private builder: FormBuilder
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
    /* this.authService.loginByEmail(user)
    .then(res => {
		window.location.href = '/home';
      if(res.user.uid){
         localStorage.setItem('uid',JSON.stringify(res.user.uid));
         window.location.href = '/home';
       }else{
         window.location.href = '/login';
       }
    })
    .catch(err => {
      localStorage.clear();
      window.location.href = '/login';
    }); */
  }
}
