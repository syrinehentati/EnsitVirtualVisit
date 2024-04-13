import { Component, OnInit } from '@angular/core';
import { Avatar } from '../../Model/Avatar';

import { AvatarService } from '../../services/avatar.service';



@Component({
  selector: 'app-avatar-overview',
  templateUrl: './avatar-overview.component.html',
  styleUrl: './avatar-overview.component.scss'
})
export class AvatarOverviewComponent implements OnInit {

  avatarData: Avatar = {
    avatarName: 'keranis',
    avatarGender:'Male',
    avatarDescription: 'This is a description about keranis',
    avatarURL: 'http://readyplayerme',
    avatarExisting: 'yes',
    avatarNPC:'no'
  };
  playerData: any = {
    playerName: 'keranis',
    playerJoke:'Why was the JavaScript developer sad? Because he didn t know how to  null his feelings!',
    playerEmail: 'sirinehentati@gmail.com',
    playerProfession: 'Student',
    playerBirthday: '2001-06-09',
    AvatarURL:'https://redayplayerme'
  };
  

 

  constructor(private avatarService: AvatarService) { } 

  ngOnInit(): void {
    
    this.avatarService.getAvatars2().subscribe(avatar2=> {
      console.log(avatar2);
    })
    //this.fetchAvatarData();
  }

  fetchAvatarData(): void {
    
    this.avatarService.getAvatars().subscribe(avatars => {
      
      if (avatars && avatars.length > 0) {
        this.avatarData = avatars[0];
      }
    }, error => {
      console.error('Error fetching avatars:', error);
    });
  }
}
function avatar2(avatar2: any) {
  throw new Error('Function not implemented.');
}

