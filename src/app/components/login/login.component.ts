import { Component , OnInit} from '@angular/core';
import{Router} from '@angular/router';

import {Admin} from '../../Model/Admin';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  Admin: Admin = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}

correcte = true;
IncorrectPass = false;
  
  constructor(private router: Router) {}

  

  onSubmit(form: NgForm) {
  console.log("registred");
}
}