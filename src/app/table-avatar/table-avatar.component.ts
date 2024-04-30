import { Component, ViewChild, ElementRef } from '@angular/core';
import { playerService } from '../services/player.service';
import { AvatarService } from '../services/avatar.service';
import { player } from '../Model/Player';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
@Component({
  selector: 'app-table-avatar',
  templateUrl: './table-avatar.component.html',
  styleUrls: ['./table-avatar.component.scss']
})
export class TableAvatarComponent {
  playerData: player = {
    nom: '',
    email: '',
    profession: '',
    dateNaissance: new Date(),
    pass: ''
  };
  incorrect: boolean = false;

  constructor(private playerService: playerService, private avatarService: AvatarService, private router: Router) { }

  onSubmit(form: NgForm) {
    this.playerService.getplayerByEmail(this.playerData.email).subscribe(player => {
      if (player && player.pass === this.playerData.pass) {
        this.avatarService.getAvatarByEmail(this.playerData.email).subscribe(avatar => {
          if (avatar && avatar.url) {
            localStorage.setItem('url', avatar.url);
          }
          console.log("success");
          console.log(localStorage.getItem('url'));
          this.router.navigate(['/testgame']); 
        });
      } else {  
        console.log("baaaaad");
        this.incorrect = true;
      }
    }, error => {
      console.error(error);
      this.incorrect = true;
    });
  }
}