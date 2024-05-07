import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stand } from '../../Model/Stand';
import { StandService } from '../../services/stand.service';

@Component({
  selector: 'app-stand-overview',
  templateUrl: './stand-overview.component.html',
  styleUrl: './stand-overview.component.scss'
})
export class StandOverviewComponent {
  
  standData: Stand |undefined;
  idstand: Number|undefined;

  constructor(private standservice:StandService,private route :ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idstand = params['id'];
      if (this.idstand) {
        this.standservice.getStandById(this.idstand).subscribe(
          (result) => {
            this.standData = result;
            console.log(this.standData);
          },
          (error) => {
            console.error('Error fetching stand data:', error);
            
          }
        );
      } else {
        console.error('idstands parameter is undefined or null.');
        
      }
    });
  }
   
  }
  
  
  