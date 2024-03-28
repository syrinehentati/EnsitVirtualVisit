import { Component } from '@angular/core';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrl: './player-overview.component.scss'
})
export class PlayerOverviewComponent {

  playerData: any = {
    playerName: 'keranis',
    playerEmail: 'sirinehentati@gmail.com',
    playerProfession: 'Student',
    playerBirthday: '2001-06-09',
    AvatarURL:'https://redayplayerme'
  };

}
