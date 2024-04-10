import { Component } from '@angular/core';

import { PlayerService } from '../../services/player.service';
import { Player } from '../../Model/Player';

@Component({
  selector: 'app-choose-avatar',
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent {
  playerData!: Player;

  submitplayerForm(){}
}
