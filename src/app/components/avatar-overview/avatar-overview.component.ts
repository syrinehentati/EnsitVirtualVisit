import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Avatar } from '../../Model/Avatar';
import { AvatarService } from '../../services/avatar.service';



@Component({
  selector: 'app-avatar-overview',
  templateUrl: './avatar-overview.component.html',
  styleUrl: './avatar-overview.component.scss'
})
export class AvatarOverviewComponent implements OnInit {

  avatarData: Avatar | undefined;

  url: string | undefined;

  

 

  constructor(private avatarService: AvatarService,private route: ActivatedRoute) { } 

  ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.url = params['url'];
    if (this.url) {
      this.avatarService.getAvatarByURL(this.url).subscribe(
        (result) => {
          this.avatarData = result;
        },
        (error) => {
          console.error('Error fetching avatar data:', error);
          
        }
      );
    } else {
      console.error('URL parameter is undefined or null.');
      
    }
  });
}
 
}


