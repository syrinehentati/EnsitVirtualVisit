import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-page-poster',
  templateUrl: './edit-page-poster.component.html',
  styleUrl: './edit-page-poster.component.scss'
})
export class EditPagePosterComponent {
  posterData: any = {
    posterName: 'IEEXtreme 17.0',
    posterImagePreview:'../../../assets/img/poster.png',
    posterImageDetailed:'../../../assets/img/poster.png',
    sujet:'Hackathon of IEEE',
    description: 'This is a description about Hackathon of IEEE ',
    lien: 'ww.facaebook.com/ieestreme17.0',
    localisationAffiche:'Type2',
    prix:'12',
    existant: 'Yes'
   
  };
  submitposterForm(form:NgForm){}

}
