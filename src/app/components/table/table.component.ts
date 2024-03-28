import { Component } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router'; // Import Router from @angular/router

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tableData: any[] = [
    { 
      AvatarName: 'syrine',
      Existing: 'yes',
      NPC: 'yes',
      Action: [
        { link: 'overviewavatar', icon: '../../../assets/img/view.jpg' },
        { link: 'editavatar', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    },
    { 
      AvatarName: 'mahdi',
      Existing: 'No',
      NPC: 'yes',
      Action: [
        { link: 'overviewavatar', icon: '../../../assets/img/view.jpg' },
        { link: 'editavatar', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    },
    { 
      AvatarName: 'fedi',
      Existing: 'No',
      NPC: 'yes',
      Action: [
        { link: 'overviewavatar', icon: '../../../assets/img/view.jpg' },
        { link: 'editavatar', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    }
  ];

  constructor(private router: Router) { } // Inject Router

  navigateToCreateAvatar() {
    this.router.navigate(['createavatar']);
  }

  handleAction(action: any) {
    if (action.modalId === '#deleteModal') { // Check if action is to show logout modal
      this.openLogoutModal(); // Call method to open logout modal
    }
  }

  openLogoutModal() {
    ($('#deleteModal') as any).modal('show');
  }
  
  delete(){
    ($('#deleteModal') as any).modal('hide');
  }
}
