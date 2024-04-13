import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../Model/User';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  User: User = {
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
    
    console.log(this.User);
    this.authService.getUsersByMail(this.User.email).subscribe(
      (result: User) => {
        this.right = true;
      }, 
      (error: HttpErrorResponse) => {
        this.authService.addUser(this.User).subscribe(
          (result: User) => {
            sessionStorage.setItem('currentUser', JSON.stringify(this.User));
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
