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
    sexe: '',
    description: '',
    url: '',
    existant: false,
    mail: ''
  };

  

  constructor(private avatarService: AvatarService, private router: Router) { }

  ngOnInit(): void {
  }

  
  submitavatarForm(form: NgForm) {
    const avatar: Avatar = {
      avatarName: form.value.avatarName,
      sexe: form.value.sexe,
      description: form.value.description,
      url: form.value.url,
      existant: form.value.existant,
      mail: form.value.mail,
    };

    console.log(avatar);

    this.avatarService.addAvatar(avatar).subscribe(
      (result)=>{
        console.log(result);
      },(error)=>{
        console.log(error);
      }
    );
    
  }

  

 

 
}
