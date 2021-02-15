import { LoginModel } from './../models/login.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm!: FormGroup;
  hide = true;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }
  onLoginSubmit(){
    alert  (this.user.email+''+ this.user.password)
  }

}
