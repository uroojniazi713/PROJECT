import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from './../models/register.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm!: FormGroup;
  hide = true;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.FormBuilder.group({
      'firstname': [this.user.firstname, [
        Validators.required
      ]],
        'lastname': [this.user.lastname, [
          Validators.required
        ]],
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
  onRegisterSubmit(){
    alert  (this.user.firstname +''+ this.user.lastname +''+ this.user.email+''+ this.user.password)
  }
}
