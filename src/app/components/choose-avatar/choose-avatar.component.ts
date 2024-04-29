import { Component } from '@angular/core';

import { playerService } from '../../services/player.service';
import { player } from '../../Model/Player';
import { Avatar } from '../../Model/Avatar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-choose-avatar',
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent {
  playerData!: player;
  avatarData!:Avatar;
  submitplayerForm(form:NgForm){}
}
