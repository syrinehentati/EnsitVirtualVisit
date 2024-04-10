import { Component } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-testgameheader',
  templateUrl: './testgameheader.component.html',
  styleUrl: './testgameheader.component.scss'
})
export class TestgameheaderComponent {
  constructor(private router: Router) { } 
  return(){
    this.router.navigate(['mainpageavatar']);
  }
  logout() {
    ($('#LogoutModal') as any).modal('show');
  }

profile(){
  this.router.navigate(['profile']);
}
}
