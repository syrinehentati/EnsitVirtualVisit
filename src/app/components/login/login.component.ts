import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { player } from '../../Model/Player';
import { playerService } from '../../services/player.service';
import { AvatarService } from '../../services/avatar.service';
import { AdministrateurService } from '../../administrateur.service';
import { administrateur } from '../../Model/administrateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  playerData: player = {
    nom: '',
    email: '',
    profession: '',
    dateNaissance: new Date(),
    pass: ''
  };
  incorrect: boolean = false;

  constructor(
    private playerService: playerService,
    private avatarService: AvatarService,
    private router: Router,
    private administrateurService: AdministrateurService
  ) {}

  onSubmit(form: NgForm) {
    this.playerService.getplayerByEmail(this.playerData.email).subscribe(player => {
      if (player && player.pass === this.playerData.pass) {
        this.avatarService.getAvatarByEmail(this.playerData.email).subscribe(avatar => {
          if (avatar && avatar.url) {
            localStorage.setItem('url', avatar.url);
          }
          console.log("success");
          console.log(localStorage.getItem('url'));

          // User is a player, redirect to test game
          this.router.navigate(['/testgame']);

        }, error => {
          console.error(error);
          this.incorrect = true;
        });
      } else {  
        // Check if the user is an admin
        this.administrateurService.getadministrateurByEmail(this.playerData.email).subscribe((admin: administrateur) => {
          if (admin) {
            console.log("helllllllllllllllllllllllllll")
            // User is an admin, redirect to main page avatar
            this.router.navigate(['/mainpageavatar']);
          } else {
            // Neither player nor admin, set incorrect to true
            this.incorrect = true;
          }
        }, error => {
          console.error(error);
          this.incorrect = true;
        });
      }
    }, error => {
      console.error(error);
      this.incorrect = true;
    });
  }
}
