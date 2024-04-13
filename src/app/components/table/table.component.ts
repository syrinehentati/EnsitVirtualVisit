import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tableData: any[] = [
    { 
      AvatarName: 'syrine',
      
      AvatarGender:'Female',
    
      Existing: 'yes',
      NPC: 'yes',
      Action: [
        { link: 'overviewavatar', icon: '../../../assets/img/view.jpg', iconClass: 'eye' },
        { link: 'editavatar', icon: '../../../assets/img/edit.png', iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg', iconClass: 'trash' },
      ]
    },
    { 
      AvatarName: 'mahdi',
      AvatarGender:'Male',
      
      Existing: 'No',
      NPC: 'yes',
      Action: [
        { link: 'overviewavatar', icon: '../../../assets/img/view.jpg', iconClass: 'eye' },
        { link: 'editavatar', icon: '../../../assets/img/edit.png', iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg', iconClass: 'trash' },
      ]
    },
    { 
      AvatarName: 'fedi',
      
      AvatarGender:'Male',
      Existing: 'No',
      NPC: 'yes',
      Action: [
        { link: 'overviewavatar', icon: '../../../assets/img/view.jpg', iconClass: 'eye' },
        { link: 'editavatar', icon: '../../../assets/img/edit.png', iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg', iconClass: 'trash' },
      ]
    }
  ];

  constructor(private router: Router) { }

  handleAction(action: any) {
    if (action.modalId === '#deleteModal') { 
      this.openLogoutModal(); 
    }
  }

  openLogoutModal() {
    ($('#deleteModal') as any).modal('show');
  }

  navigateToCreateAvatar() {
    this.router.navigate(['createavatar']);
  }  
}
