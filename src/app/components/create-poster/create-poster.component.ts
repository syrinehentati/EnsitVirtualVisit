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
      image: null,
      couverture: null,
      localisationAffiche: 1,
      prix: 0,
      existant: false,
      lien: '',
      idAffiche: 0
    };
  
    posterImage: File | null = null;
    detailedImage: File | null = null;
  
    constructor(private posterService: PosterService, private router: Router) {}
  
    onImageChange(event: any) {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        const file: File = fileList[0];
        this.posterImage = file; // Store the file in posterImage
        console.log(this.posterImage);
      }
    }
    
    onDetailedImageChange(event: any) {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        const file: File = fileList[0];
        this.detailedImage = file; // Store the file in detailedImage
        console.log(this.detailedImage);
      }
    }
    
    // Method to submit the form
    submitposterForm(form: NgForm) {
      const poster: Poster = {
        titre: form.value.titre,
        sujet: form.value.sujet,
        description: form.value.description,
        image: this.posterImage,
        couverture: this.detailedImage,
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
  