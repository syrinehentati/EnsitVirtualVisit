import { OnInit} from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Avatar } from '../../Model/Avatar';
import { AvatarService } from '../../services/avatar.service';
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  
  tableData: Avatar[] = [];
  
  avatarData: Avatar | undefined = {
    url: '',
    avatarName: '',
    description: '',
    existant: false,
    sexe: '',
    mail: ''
  };
  avatarURL: string | undefined;

  constructor(private router: Router, private avatarsService: AvatarService ) {}

  ngOnInit(): void {
    this.avatarsService.getAvatars().subscribe(
      (result) => {
        this.tableData = result;
      }
    );
  }

  testFunction(): void{
      console.log('hello');
  }
 
 openDeleteModal(url1:string){
   console.log("inchallah nal9a trace");
   console.log(url1);
    if(url1){
      this.avatarURL=url1;
      this.avatarsService.getAvatarByURL(this.avatarURL).subscribe(
        (result) => {
          this.avatarData= result;
          console.log(this.avatarURL);
        }
      );
    
    ($('#deleteModal') as any).modal('show');}
    else{
      console.error("undefined url ");
    }

  }
  
  deleteAvatar(): void {
    if (this.avatarData) {
      this.avatarsService.deleteAvatar(this.avatarData.url).subscribe(
        () => {
          
          console.log('Avatar deleted successfully');
         
          ($('#deleteModal') as any).modal('hide');
        },
        (error) => {
          console.error('Error deleting avatar:', error);
        }
      );
    } else {
      console.error("Avatar data undefined");
    }
  }

  navigateToCreateAvatar() {
    alert('what now ');
    this.router.navigate(['createavatar']);
  }
  
  navigateToEditAvatar(url: string) {
    this.router.navigate(['editavatar',  url ]);
  }

  consultAvatar(url:string):void{

    this.router.navigate(['overviewavatar', url]); 
  }

  
 

  

 
 
  
}

