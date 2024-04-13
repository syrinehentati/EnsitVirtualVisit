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
    posterSubject:'Hackathon of IEEE',
    posterDescription: 'This is a description about Hackathon of IEEE ',
    posterURL: 'ww.facaebook.com/ieestreme17.0',
    posterType:'Type2',
    posterPrice:'12',
    posterExisting: 'Yes'
   
  };
  submitposterForm(form:NgForm){}

}
