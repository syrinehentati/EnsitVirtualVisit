
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poster } from '../../Model/Poster';
import { PosterService } from '../../services/poster.service';

@Component({
  selector: 'app-poster-overview',
  templateUrl: './poster-overview.component.html',
  styleUrl: './poster-overview.component.scss'
})
export class PosterOverviewComponent {

  posterData: Poster |undefined;
  idaffiche: Number|undefined;

  constructor(private posterservice:PosterService,private route :ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idaffiche = params['id'];
      if (this.idaffiche) {
        this.posterservice.getPosterByid(this.idaffiche).subscribe(
          (result) => {
            this.posterData = result;
            console.log(this.posterData);
          },
          (error) => {
            console.error('Error fetching poster data:', error);
            
          }
        );
      } else {
        console.error('idaffiches parameter is undefined or null.');
        
      }
    });
  }
   
  }
  
  
  