import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-overview',
  templateUrl: './avatar-overview.component.html',
  styleUrl: './avatar-overview.component.scss'
})
export class AvatarOverviewComponent {

  avatarData: any = {
    avatarName: 'keranis',
    avatarDescription: 'This is a description about keranis',
    avatarURL: 'http://readyplayerme',
    avatarExisting: 'yes',
    avatarNPC:'yes'
  };
}
