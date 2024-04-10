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
      Localisation: 'Small windows1',
      Existing: 'yes',
      Price: '0',
      Action: [
        { link: 'overviewposter', icon: '../../../assets/img/view.jpg' },
        { link: 'editposter', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    },
    { 
      Title: 'GeeksHack3.0',
      Localisation: 'Medium Window 3',
      Existing: 'yes',
      Price: '10',
      Action: [
        { link: 'overviewposter', icon: '../../../assets/img/view.jpg' },
        { link: 'editposter', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    },
    { 
      Title: 'Game On',
      Localisation: 'Big Window',
      Existing: 'yes',
      Price: '325',
      Action: [
        { link: 'overviewposter', icon: '../../../assets/img/view.jpg' },
        { link: 'editposter', icon: '../../../assets/img/edit.png' },
        { modalId: '#deleteModal', icon: '../../../assets/img/delete.jpeg' },
      ]
    }
  ];

  constructor(private router: Router) { } 

  navigateToCreateposter() {
    this.router.navigate(['createposter']);
  }

  
}


