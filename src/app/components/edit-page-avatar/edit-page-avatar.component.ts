import { Component } from '@angular/core';

import { NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Avatar } from '../../Model/Avatar';
import { AvatarService } from '../../services/avatar.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-edit-page-avatar',
  templateUrl: './edit-page-avatar.component.html',
  styleUrl: './edit-page-avatar.component.scss'
})
export class EditPageAvatarComponent implements OnInit {
  avatarData!: Avatar;
  
  url!:string;


  constructor(private avatarService: AvatarService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.url = params['url'];
      if (this.url){
        this.avatarService.getAvatarByURL(this.url).subscribe(
          (result)=>{ this.avatarData = result;
          },
          (error) => {
            console.error('error fetching avatar datat',error);
          }
        );

      } else {
        console.error('URL parameter is undefined or null ');
      }
    });
  }
  submitavatarForm(form: NgForm) {
    const avatar: Avatar = {
      avatarName: form.value.avatarName,
      sexe: form.value.sexe,
      description : form.value.description,
      url: form.value.url,
      existant: form.value.existant,
      mail: form.value.mail,

    };

  

    this.avatarService.updateAvatar(this.url, this.avatarData).subscribe(
      (result)=>{
        console.log(this.avatarData);
      },(error)=>{
        console.log(error);
      }
    );
    
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




