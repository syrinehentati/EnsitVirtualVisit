import { Component } from '@angular/core';

declare var $: any;
import { Router } from '@angular/router'; 
import { player } from '../../Model/Player';
import { playerService } from '../../services/player.service';

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrl: './table-player.component.scss'
})
export class TablePlayerComponent {
  

  
  
  playerData: player = {
    nom: '',
    email: '',
    profession: '',
    dateNaissance: new Date('2001-01-03'),
    pass: ''
  };

  playerEmail: string | undefined;
  tableData: player[] | undefined;

  constructor(private router: Router, private playersService: playerService ) {}

  ngOnInit(): void {
    this.playersService.getplayers().subscribe(
      (result) => {
        this.tableData = result;
      }
    );
  }

 
 openDeleteModal(email1:string){/*
    if(email1){
      this.playerEmail=email1;
      this.playersService.getplayerByEmail(this.playerEmail).subscribe(
        (result) => {
          this.playerData= result;
          console.log(this.playerEmail);
        }
      );
    
    ($('#deleteModal') as any).modal('show');}
    else{
      console.error("undefined email ");
    }
*/
  }
  
  deleteplayer(): void {/*
    if (this.playerData) {
      this.playersService.deleteplayer(this.playerData.email).subscribe(
        () => {
          
          console.log('player deleted successfully');
         
          ($('#deleteModal') as any).modal('hide');
        },
        (error) => {
          console.error('Error deleting player:', error);
        }
      );
    } else {
      console.error("player data undefined");
    }*/
  }

  navigateToCreateplayer() {
    this.router.navigate(['createplayer']);
  }
  
  navigateToEditplayer(email: string) {
    this.router.navigate(['editplayer',  email ]);
  }

  consultplayer(email:string):void{

    this.router.navigate(['overviewplayer', email]); 
  }

  
 

  

 
 
  
}