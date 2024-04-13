import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AvatarService } from '../../services/avatar.service';
import { Avatar } from '../../Model/Avatar';
import { Player } from '../../Model/Player'; // Import Player interface

@Component({
  selector: 'app-create-avatar',
  templateUrl: './create-avatar.component.html',
  styleUrls: ['./create-avatar.component.scss']
})
export class CreateAvatarComponent implements OnInit {

  avatarData: Avatar = {
    avatarName: '',
    avatarGender: '',
    avatarDescription: '',
    avatarURL: '', 
    avatarExisting: '',
    avatarNPC: ''
  };

  playerData: Player = {
    playerName: '',
    playerEmail: '',
    playerProfession: '',
    playerBirthday: new Date(),
    AvatarURL: '',
    AvatarName: '',
    playerJoke: ''
  };

  invalidURL = false;

  constructor(private avatarService: AvatarService, private router: Router) { }

  ngOnInit(): void {
  }

  submitavatarForm(form: NgForm) {
    const avatar: Avatar = {
      avatarName: form.value.avatarName,
      avatarGender: form.value.avatarGender,
      avatarDescription: form.value.avatarDescription,
      avatarURL: this.avatarData.avatarURL,
      avatarExisting: this.avatarData.avatarExisting,
      avatarNPC: this.avatarData.avatarNPC
    };

    const player: Player = {
      playerName: this.playerData.playerName,
      playerEmail: this.playerData.playerEmail,
      playerProfession: this.playerData.playerProfession,
      playerBirthday: this.playerData.playerBirthday,
      AvatarURL: this.avatarData.avatarURL, // Assuming avatar URL for player is the same as the avatar's
      AvatarName: form.value.avatarName, // Assuming AvatarName should match the avatarName in the form
      playerJoke: this.playerData.playerJoke
    };

    // Assuming you want to add both avatar and player to the service
    this.avatarService.addAvatar(avatar).subscribe(
      (response: any) => {
        console.log(response);
        // You might want to handle success response here
      },
      (error: any) => {
        console.log(error.message);
        // You might want to handle error here
      }
    );
/*
    this.avatarService.addPlayer(player).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['avatars']); // Assuming you want to navigate to 'avatars' after adding player
      },
      (error: any) => {
        console.log(error.message);
        // You might want to handle error here
      }
    );*/
  }

  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const preview = document.getElementById('imagePreview') as HTMLImageElement;
      preview.src = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);
    this.avatarData.avatarURL = event.target.files[0]; 
  }

  validateAvatarURL(url: string) {
    // Simple URL validation logic, you can extend this as needed
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // Protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // Domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // Port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // Query string
      '(\\#[-a-z\\d_]*)?$','i'); // Fragment locator

    this.invalidURL = !pattern.test(url);
  }
}
