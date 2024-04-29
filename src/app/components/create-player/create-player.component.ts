import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { player } from '../../Model/Player';
import { playerService } from '../../services/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrl: './create-player.component.scss'
})
export class CreatePlayerComponent  implements OnInit{
  playerData: player = {

    nom: '',
    email: '',
    profession: '',
    dateNaissance: new Date('02/08/2001'), 
    pass: ''
  };

  constructor(private playerService:playerService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  submitplayerForm(form:NgForm){
   const player :player = {
     nom:form.value.nom,
     email:form.value.email,
     profession:form.value.profession,
     dateNaissance:form.value.dateNaissance,
     pass:form.value.pass,
   };
  console.log(player);
  this.playerService.addplayer(player).subscribe(
    (result)=>{
      console.log(result);
    },(error)=>{
      console.log(error);
    }
  );

  }
}
