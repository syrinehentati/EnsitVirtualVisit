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
      Profession: 'Professor',
      
      Action: [
        { link: 'overviewplayer', icon: '../../../assets/img/view.jpg' },
        { link: 'editplayer', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    },
    { 
      PlayerName: 'Syrine hentati',
      Profession: 'Student',
      Action: [
        { link: 'overviewplayer', icon: '../../../assets/img/view.jpg' },
        { link: 'editplayer', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    },
    { 
      PlayerName: 'Mahdi hadj sassi',
      Profession: 'Student',
      Action: [
        { link: 'overviewplayer', icon: '../../../assets/img/view.jpg' },
        { link: 'editplayer', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    }
  ];

  constructor(private router: Router) { } 

  navigateToCreateplayer() {
    this.router.navigate(['createplayer']);
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