import { Component } from '@angular/core';

@Component({
  selector: 'app-stand-overview',
  templateUrl: './stand-overview.component.html',
  styleUrl: './stand-overview.component.scss'
})
export class StandOverviewComponent {
  standData: any = {
    standName: 'geeks',
    standDescription: 'This is a description for a stand of geeks ',
    standURL: 'ww.facaebook.com/geeks',
    standLocalisation:'desk 1',
    standPrice:'12',
    standExisting: 'yes'
   
  };
}
