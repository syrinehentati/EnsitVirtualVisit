import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { player } from '../../Model/Player';
import { playerService } from '../../services/player.service';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrl: './player-overview.component.scss'
})
export class PlayerOverviewComponent {

  

  playerData: player | undefined;

  email: string | undefined;

  

 

  constructor(private playerService: playerService,private route: ActivatedRoute) { } 

  ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.email = params['email'];
    if (this.email) {
      this.playerService.getplayerByEmail(this.email).subscribe(
        (result) => {
          this.playerData = result;
          console.log(this.playerData);
        },
        (error) => {
          console.error('Error fetching player data:', error);
          
        }
      );
    } else {
      console.error('email parameter is undefined or null.');
      
    }
  });
}
 
}


