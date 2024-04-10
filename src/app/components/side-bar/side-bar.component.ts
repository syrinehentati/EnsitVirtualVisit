import { Component } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router'; // Import Router from @angular/router

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  logout() {
    ($('#LogoutModal') as any).modal('show');
  }
}
