import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {

  UserData: any = {
  FirstName:'Syrine',
  LastName: 'Hentati',
  email: 'sirinehentati@gmail.com',
  password: '',
  }
  

}
