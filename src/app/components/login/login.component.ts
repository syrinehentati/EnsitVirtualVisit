import { Component , OnInit} from '@angular/core';
import{Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {Admin} from '../../Model/Admin';

import { HttpErrorResponse } from '@angular/common/http';
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



constructor(
            public authService: AuthService,
            private router: Router) {
}

ngOnInit(): void {
}


onSubmit(form: NgForm) {
    this.authService.getAdminsByMail(this.Admin.email).subscribe(
        (result: Admin) => {
            if (this.Admin.password === result.password) {
                
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