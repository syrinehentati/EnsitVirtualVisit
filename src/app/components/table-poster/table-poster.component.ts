import { Component } from '@angular/core';

declare var $: any;
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-table-poster',
  templateUrl: './table-poster.component.html',
  styleUrl: './table-poster.component.scss'
})
export class TablePosterComponent {
  tableData: any[] = [
    { 
      Title: 'IEEEXTREME 17.0',
      
      Subject:'this is a subject about the poster IEEEXTREME 17.0',
      Type:'Type1',
      Existing: 'yes',
      Price: '0',
      Action: [
        { link: 'overviewposter', icon: '../../../assets/img/view.jpg' ,iconClass: 'eye' },
        { link: 'editposter', icon: '../../../assets/img/edit.png' ,iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' ,iconClass: 'trash'},
      ]
    },
    { 
      Title: 'GeeksHack3.0',
      
      Subject:'this is a subject about the poster GeeksHack3.0',
      Type:'Type2',
      Existing: 'yes',
      Price: '10',
      Action: [
        { link: 'overviewposter', icon: '../../../assets/img/view.jpg',iconClass: 'eye' },
        { link: 'editposter', icon: '../../../assets/img/edit.png' ,iconClass: 'pencil'},
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' ,iconClass: 'trash'},
      ]
    },
    { 
      Title: 'Game On',
      Subject:'this is a subject about the poster Game On',
      Type:'Type1',
      Existing: 'yes',
      Price: '325',
      Action: [
        { link: 'overviewposter', icon: '../../../assets/img/view.jpg' ,iconClass: 'eye'},
        { link: 'editposter', icon: '../../../assets/img/edit.png',iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' ,iconClass: 'trash'},
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
  navigateToCreateposter() {
    this.router.navigate(['createposter']);
  }

  
}


