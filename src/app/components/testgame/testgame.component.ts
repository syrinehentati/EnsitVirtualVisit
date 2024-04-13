import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-testgame',
  templateUrl: './testgame.component.html',
  styleUrls: ['./testgame.component.scss']
})
export class TestgameComponent {
  
  constructor(private router: Router) { }
  
  logout(): void {
    $('#LogoutModal').modal('show');
  }

  profile(): void {
    this.router.navigate(['profile']);
  }
}
