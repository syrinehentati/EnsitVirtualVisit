import { Component } from '@angular/core';

declare var $: any;
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrl: './table-player.component.scss'
})
export class TablePlayerComponent {
  tableData: any[] = [
    { 
      PlayerName: 'fedi Bahloul',
      Email:'fediBahloul@gmail.com',
      Profession: 'Professor',
      Birthday: "21-09-2001",
      Action: [
        { link: 'overviewplayer', icon: '../../../assets/img/view.jpg',iconClass: 'eye' },
        { link: 'editplayer', icon: '../../../assets/img/edit.png' ,iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg',iconClass: 'trash' },
      ]
    },
    { 
      PlayerName: 'Syrine hentati',
      Email:'sirinehentati@gmail.com',
      Profession: 'Student',
      Birthday: "21-09-2001",
      Action: [
        { link: 'overviewplayer', icon: '../../../assets/img/view.jpg' ,iconClass: 'eye'},
        { link: 'editplayer', icon: '../../../assets/img/edit.png' ,iconClass: 'pencil'},
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' ,iconClass: 'trash'},
      ]
    },
    { 
      PlayerName: 'Mahdi hadj sassi',
      Profession: 'Student',
      Email:'Mahdihadjsassi@gmail.com',
      Birthday: "21-09-2001",
      Action: [
        { link: 'overviewplayer', icon: '../../../assets/img/view.jpg',iconClass: 'eye' },
        { link: 'editplayer', icon: '../../../assets/img/edit.png',iconClass: 'pencil' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' ,iconClass: 'trash' },
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
  navigateToCreateplayer() {
    this.router.navigate(['createplayer']);
  }

  
}