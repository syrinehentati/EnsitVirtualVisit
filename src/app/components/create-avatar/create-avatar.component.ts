import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AvatarService } from '../../services/avatar.service';
import { Avatar } from '../../Model/Avatar';

@Component({
  selector: 'app-create-avatar',
  templateUrl: './create-avatar.component.html',
  styleUrls: ['./create-avatar.component.scss']
})
export class CreateAvatarComponent implements OnInit {

  avatarData: Avatar = {
    avatarName: '',
    avatarDescription: '',
    avatarURL: '', 
    avatarExisting: '',
    avatarNPC: ''
  };

  constructor(private avatarService: AvatarService, private router: Router) { }

  ngOnInit(): void {
  }

  submitAvatarForm(form: NgForm) {
    const avatar: Avatar = {
      avatarName: form.value.avatarName,
      avatarDescription: form.value.avatarDescription,
      avatarURL: this.avatarData.avatarURL,
      avatarExisting: this.avatarData.avatarExisting,
      avatarNPC: this.avatarData.avatarNPC
    };

    this.avatarService.addAvatar(avatar).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['avatars']);
      },
      (error: any) => {
        console.log(error.message);
      }
    );

    this.avatarService.addAvatar(this.avatarData);
  }

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const preview = document.getElementById('imagePreview') as HTMLImageElement;
      preview.src = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);

    // Store image data
    this.avatarData.avatarURL = event.target.files[0]; 
  }
}
