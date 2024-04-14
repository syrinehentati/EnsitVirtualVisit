import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {

  playerData: any = {
    playerName: 'keranis',
    playerEmail: 'sirinehentati@gmail.com',
    playerProfession: 'Student',
    playerBirthday: '2001-06-09',
    AvatarURL:'https://readyplayerme',
    Joke:'Why don t skeletons fight each other? They don t have the guts!'
  };
  UserData: any = {
  FirstName:'Syrine',
  LastName: 'Hentati',
  email: 'sirinehentati@gmail.com',
  password: '',
  }

}
