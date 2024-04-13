import { Component , OnInit} from '@angular/core';
import{Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {User} from '../../Model/User';

import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  User: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}
correcte = true;
IncorrectPass = false;



constructor(
            public authService: AuthService,
            private router: Router) {
}

ngOnInit(): void {
}


onSubmit(form: NgForm) {
    this.authService.getUsersByMail(this.User.email).subscribe(
        (result: User) => {
            if (this.User.password === result.password) {
                
                sessionStorage.setItem('currentUser', JSON.stringify(result));
                this.router.navigate(['dashboard']);
                window.location.reload();
            } else {
                this.IncorrectPass = true;
                this.correcte = true;
            }

        }, (error: HttpErrorResponse) => {
            this.correcte = false;
            this.IncorrectPass = false;
        }
    );
}
}