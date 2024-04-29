import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { playerService } from '../../services/player.service';
import {player} from '../../Model/Player';

import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page-player',
  templateUrl: './edit-page-player.component.html',
  styleUrl: './edit-page-player.component.scss'
})
export class EditPagePlayerComponent implements OnInit {
  
  playerData: player = {
    nom: '',
    email: '',
    profession: '',
    dateNaissance: new Date('02/08/2001'), 
    pass: ''
  };
  email!:string;
  constructor(private playerService:playerService,private route:ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.email = params['email'];
      if (this.email){
        this.playerService.getplayerByEmail(this.email).subscribe(
          (result)=>{
            this.playerData = result;
          },
          (error) => {
            console.error('error fetching for a player ')
          }

        );}
        else {
          console.error('email not found');
        }
      } );
    
    } 
    
  submitplayerForm(form: NgForm){

    const player: player = {
      nom: form.value.nom,
      email: form.value.email,
      profession: form.value.profession,
      dateNaissance: form.value.dateNaissance,
      pass:form.value.pass
    };
  


  this.playerService.updateplayer(this.email, this.playerData).subscribe(
    (result)=>{
      console.log(this.playerData);
    },(error)=>{
      console.log(error);
    }
  );
}}
