import { Component } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router'; 
import { Stand } from '../../Model/Stand';
import {  StandService } from '../../services/stand.service';

@Component({
  selector: 'app-table-stand',
  templateUrl: './table-stand.component.html',
  styleUrl: './table-stand.component.scss'
})
export class TableStandComponent {
  tableData: Stand[] = [ ];

  constructor(private router: Router,private standService:StandService) { } 


  standData:Stand |undefined = {
    idStand:0,
    nom: '',
    description:  '',
    sujet : '',
    image:'',
    lien: '',
    standType: 1,
    prix: 0,
    existant:  false,
  }
  ngOnInit(): void {
    this.standService.getStands().subscribe(
      (result: Stand[]) => {
        this.tableData = result;
      }
    );
  }

 
 openDeleteModal(id1:Number){
    if(id1){
      this.idStand=id1;
      this.standService.getStandById(this.idStand).subscribe(
        (result: Stand | undefined) => {
          this.standData= result;
          console.log(this.idStand);
        }
      );
    
    ($('#deleteModal') as any).modal('show');}
    else{
      console.error("undefined url ");
    }

  }
  idStand!:Number;

  deletestand(): void {
    
    if (this.standData) {
      this.standService.deleteStand(this.standData.idStand).subscribe(
        () => {
          
          console.log('stand deleted successfully');
         
          ($('#deleteModal') as any).modal('hide');
        },
        (error: any) => {
          console.error('Error deleting stand:', error);
        }
      );
    } else {
      console.error("stand data undefined");
    }
  }

  navigateToCreatestand() {
    this.router.navigate(['createstand']);
  }
  
  navigateToEditstand(id: Number) {
    this.router.navigate(['editstand',  id ]);
  }

  consultstand(id: Number):void{

    this.router.navigate(['overviewstand', id]); 
  }

  
 

  

 
 
  
}

