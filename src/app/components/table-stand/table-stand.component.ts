import { Component } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-table-stand',
  templateUrl: './table-stand.component.html',
  styleUrl: './table-stand.component.scss'
})
export class TableStandComponent {
  tableData: any[] = [
    { 
      Title: 'IEEEXTREME 17.0',
      Subject: 'this is a subject about the stand IEEEXTREME 17.0',
      Type: 'Type1',
      Existing: 'yes',
      Price: '0',
      Action: [
        { link: 'overviewstand', icon: '../../../assets/img/view.jpg',iconClass: 'eye' },
        { link: 'editstand', icon: '../../../assets/img/edit.png',iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg',iconClass: 'trash' },
      ]
    },
    { 
      Title: 'GeeksHack3.0',
      Subject: 'this is a subject about the stand GeeksHack3.0',
      Type: 'Type2',
      Existing: 'yes',
      Price: '10',
      Action: [
        { link: 'overviewstand', icon: '../../../assets/img/view.jpg' ,iconClass: 'eye'},
        { link: 'editstand', icon: '../../../assets/img/edit.png',iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' ,iconClass: 'trash' },
      ]
    },
    { 
      Title: 'Game On',
      
      Subject: 'this is a subject about the stand Game On',
      Type: 'Type1',
      Existing: 'yes',
      Price: '325',
      Action: [
        { link: 'overviewstand', icon: '../../../assets/img/view.jpg' ,iconClass: 'eye'},
        { link: 'editstand', icon: '../../../assets/img/edit.png',iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' ,iconClass: 'trash' },
      ]
    }
  ];

  constructor(private router: Router) { } 

  navigateToCreatestand() {
    this.router.navigate(['createstand']);
  }

  handleAction(action: any) {
    if (action.modalId === '#deleteModal') { 
      this.openLogoutModal(); 
    }
  }

  openLogoutModal() {
    ($('#deleteModal') as any).modal('show');
  }
}


