import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrl: './create-player.component.scss'
})
export class CreatePlayerComponent {
  playerData: any = {};
  submitplayerForm(form:NgForm){}
}
