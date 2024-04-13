import { Component } from '@angular/core';

@Component({
  selector: 'app-stand-overview',
  templateUrl: './stand-overview.component.html',
  styleUrl: './stand-overview.component.scss'
})
export class StandOverviewComponent {
  standData: any = {
    standName: 'geeks',
    standImage:'../../../assets/img/poster.png',
    standSubject:'this is a subject for a stand of geeks',
    standDescription: 'This is a description for a stand of geeks ',
    standURL: 'ww.facaebook.com/geeks',
    standType:'Type2',
    standPrice:'12',
    standExisting: 'yes'
   
  };
}
