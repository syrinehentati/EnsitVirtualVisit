import { Component } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Poster } from '../../Model/Poster';
import { PosterService } from '../../services/poster.service';

@Component({
  selector: 'app-create-poster',
  templateUrl: './create-poster.component.html',
  styleUrls: ['./create-poster.component.scss']
})
export class CreatePosterComponent {

  posterData: Poster = {
    titre: '',
    sujet: '',
    description: '',
    image: '',
    couverture: '',
    localisationAffiche: 1,
    prix: 0,
    existant: false,
    lien: '',
    idAffiche: 0
  };


  posterImage: string | ArrayBuffer | null = null;
  detailedImage: string | ArrayBuffer | null = null;

  constructor(private posterService: PosterService, private router: Router) {}

  onImageChange(event: any) {
    this.posterImage = event.target.files[0];
    console.log(this.posterImage);
  }

  
  onDetailedImageChange(event: any) {
    this.detailedImage = event.target.files[0];
    console.log(this.detailedImage);
  }

  
  // Method to submit the form
  submitposterForm(form: NgForm) {
    const poster: Poster = {
      titre: form.value.titre,
      sujet: form.value.sujet,
      description: form.value.description,
      image: this.posterImage ? this.posterImage.toString() : '',
      couverture: this.detailedImage ? this.detailedImage.toString() : '',
      localisationAffiche: form.value.localisationAffiche,
      prix: form.value.prix,
      existant: form.value.existant,
      lien: form.value.lien,
      idAffiche: 0
    };

    this.posterService.addPoster(poster).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
