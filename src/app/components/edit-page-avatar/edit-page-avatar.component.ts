import { Component } from '@angular/core';

import {Form, NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Avatar } from '../../Model/Avatar';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-edit-page-avatar',
  templateUrl: './edit-page-avatar.component.html',
  styleUrl: './edit-page-avatar.component.scss'
})
export class EditPageAvatarComponent {
  avatarData: any = {};
  avatar!: Avatar;


  constructor(private avatarService: AvatarService) { }

  submitAvatarForm(Form:Form) {
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




