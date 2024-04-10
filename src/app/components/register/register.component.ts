import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Admin } from '../../Model/Admin';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  admin: Admin = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''

  };

  
  repeatPassword: string = '';
  rightmail: boolean = false;
  right: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(form: NgForm) {
    
    console.log(this.admin);
    this.authService.getAdminsByMail(this.admin.email).subscribe(
      (result: Admin) => {
        this.right = true;
      }, 
      (error: HttpErrorResponse) => {
        this.authService.addAdmin(this.admin).subscribe(
          (result: Admin) => {
            sessionStorage.setItem('currentAdmin', JSON.stringify(this.admin));
            this.router.navigate(['dashboard']);
            window.location.reload();
          }, 
          (error: HttpErrorResponse) => {
            this.right = false;
          }
        );
      }
    );
  }

  mailing(key: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.rightmail = emailRegex.test(key);
  }

  samePass(pass: string) {
    this.repeatPassword = pass;
  }
}
