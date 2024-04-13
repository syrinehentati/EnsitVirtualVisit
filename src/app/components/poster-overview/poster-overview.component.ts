import { Component } from '@angular/core';

@Component({
  selector: 'app-poster-overview',
  templateUrl: './poster-overview.component.html',
  styleUrl: './poster-overview.component.scss'
})
export class PosterOverviewComponent {

  posterData: any = {
    posterName: 'IEEXtreme 17.0',
    posterSubject:'Hackathon of IEEE',
    posterDetailedImage:'../../../assets/img/poster.png',
    posterPreviewImage:'../../../assets/img/poster.png',
    posterDescription: 'This is a description about Hackathon of IEEE ',
    posterURL: 'ww.facaebook.com/ieestreme17.0',
    posterType:'Type1',
    posterPrice:'12',
    posterExisting: 'yes'
   
  };

}
