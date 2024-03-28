import { Component } from '@angular/core';

import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-edit-page-avatar',
  templateUrl: './edit-page-avatar.component.html',
  styleUrl: './edit-page-avatar.component.scss'
})
export class EditPageAvatarComponent {
  avatarData: any = {};


  constructor(private avatarService: AvatarService) { }

  submitAvatarForm() {
    // Store the form data using the service
    this.avatarService.setAvatarData(this.avatarData);
  }
  previewImage(event: any) {
    // Handle image preview logic here
    const reader = new FileReader();
    reader.onload = () => {
      const preview = document.getElementById('imagePreview') as HTMLImageElement;
      preview.src = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);

    // Store image data
    this.avatarData.avatarImage = event.target.files[0];
  }
}