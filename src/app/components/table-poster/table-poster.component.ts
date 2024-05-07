import { Component } from '@angular/core';

declare var $: any;
import { Router } from '@angular/router'; 
import { Poster } from '../../Model/Poster';
import { PosterService } from '../../services/poster.service';
@Component({
  selector: 'app-table-poster',
  templateUrl: './table-poster.component.html',
  styleUrl: './table-poster.component.scss'
})
export class TablePosterComponent {
  tableData: Poster[] = [
   
  ];

  constructor(private router: Router,private postersService: PosterService) { } 


  posterData: Poster | undefined = {
    idAffiche:0,
  titre: '',
  sujet: '',
  description: '',
  image:'',
  couverture:'',
  localisationAffiche: 0,
  prix: 0,
  existant: false,
  lien: '',
  };
  idposter!: Number;

 

  ngOnInit(): void {
    this.postersService.getPosters().subscribe(
      (result: Poster[]) => {
        this.tableData = result;
      }
    );
  }

 
 openDeleteModal(id1:Number){
    if(id1){
      this.idposter=id1;
      this.postersService.getPosterByid(this.idposter).subscribe(
        (result) => {
          this.posterData= result;
          console.log(this.idposter);
        }
      );
    
    ($('#deleteModal') as any).modal('show');}
    else{
      console.error("undefined url ");
    }

  }
  
  deleteposter(): void {
    
    if (this.posterData) {
      this.postersService.deletePoster(this.posterData.idAffiche).subscribe(
        () => {
          
          console.log('poster deleted successfully');
         
          ($('#deleteModal') as any).modal('hide');
        },
        (error: any) => {
          console.error('Error deleting poster:', error);
        }
      );
    } else {
      console.error("poster data undefined");
    }
  }

  navigateToCreateposter() {
    this.router.navigate(['createposter']);
  }
  
  navigateToEditposter(id: Number) {
    this.router.navigate(['editposter',  id ]);
  }

  consultposter(id: Number):void{

    this.router.navigate(['overviewposter', id]); 
  }

  
 

  

 
 
  
}

