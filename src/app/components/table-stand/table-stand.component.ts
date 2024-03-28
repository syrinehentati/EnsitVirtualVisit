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
      Localisation: 'Small windows1',
      Existing: 'yes',
      Price: '0',
      Action: [
        { link: 'overviewstand', icon: '../../../assets/img/view.jpg' },
        { link: 'editstand', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    },
    { 
      Title: 'GeeksHack3.0',
      Localisation: 'Medium Window 3',
      Existing: 'yes',
      Price: '10',
      Action: [
        { link: 'overviewstand', icon: '../../../assets/img/view.jpg' },
        { link: 'editstand', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    },
    { 
      Title: 'Game On',
      Localisation: 'Big Window',
      Existing: 'yes',
      Price: '325',
      Action: [
        { link: 'overviewstand', icon: '../../../assets/img/view.jpg' },
        { link: 'editstand', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
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
  
  delete(){
    ($('#deleteModal') as any).modal('hide');
  }
}


