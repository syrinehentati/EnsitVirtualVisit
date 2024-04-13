import { Component } from '@angular/core';

import { NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Avatar } from '../../Model/Avatar';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-edit-page-avatar',
  templateUrl: './edit-page-avatar.component.html',
  styleUrl: './edit-page-avatar.component.scss'
})
export class EditPageAvatarComponent {
  avatarData: Avatar = {
    avatarName: 'keranis',
    avatarGender:'Female',
    avatarDescription: 'This is a description about keranis',
    avatarURL: 'http://readyplayerme',
    avatarExisting: 'yes',
    avatarNPC:'no'
  };
  
  
  playerData: any = {
    playerName: 'keranis',
    playerEmail: 'sirinehentati@gmail.com',
    playerProfession: 'Student',
    playerBirthday: '2001-06-09',
    AvatarURL:'https://redayplayerme',
    playerJoke:'Why don t skeletons fight each other? They don t have the guts!'
  };
  avatar!: Avatar;


  constructor(private avatarService: AvatarService) { }

  submitavatarForm(Form:NgForm) {
    this.avatarService.updateAvatar(this.avatarData);
  }
  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const preview = document.getElementById('imagePreview') as HTMLImageElement;
      preview.src = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);

  }
}




