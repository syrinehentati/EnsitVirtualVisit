import { Component } from '@angular/core';

@Component({
  selector: 'app-poster-overview',
  templateUrl: './poster-overview.component.html',
  styleUrl: './poster-overview.component.scss'
})
export class PosterOverviewComponent {

  posterData: any = {
    posterName: 'IEEXtreme 17.0',
    sujet:'Hackathon of IEEE',
    couverture:'../../../assets/img/poster.png',
    image:'../../../assets/img/poster.png',
    description: 'This is a description about Hackathon of IEEE ',
    lien: 'ww.facaebook.com/ieestreme17.0',
    localisationAffiche:'Type1',
    prix:'12',
    existant: 'yes'
   
  };

}
