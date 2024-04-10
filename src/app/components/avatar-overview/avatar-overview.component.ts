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
    avatarDescription: 'This is a description about keranis',
    avatarURL: 'http://readyplayerme',
    avatarExisting: 'yes',
    avatarNPC:'yes'
  };
  

 

  constructor(private avatarService: AvatarService) { } 

  ngOnInit(): void {
    
    this.fetchAvatarData();
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
