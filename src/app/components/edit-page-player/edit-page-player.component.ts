import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-page-player',
  templateUrl: './edit-page-player.component.html',
  styleUrl: './edit-page-player.component.scss'
})
export class EditPagePlayerComponent {
  playerData: any = {
    playerName: 'keranis',
    playerEmail: 'sirinehentati@gmail.com',
    playerProfession: 'Student',
    playerBirthday: '2001-06-09',
    AvatarURL:'https://redayplayerme',
    playerJoke:'Why don t skeletons fight each other? They don t have the guts!'
  };
  submitplayerForm(form: NgForm){}
}
