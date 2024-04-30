import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Poster } from '../../Model/Poster';
import { PosterService } from '../../services/poster.service';

@Component({
  selector: 'app-edit-page-poster',
  templateUrl: './edit-page-poster.component.html',
  styleUrls: ['./edit-page-poster.component.scss'] // Corrected attribute name
})
export class EditPagePosterComponent implements OnInit { // Added OnInit

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
    idAffiche: 1
  };

  posterImage: string = ''; // Initialize properties
  detailedImage: string = '';
  posterimg: string = '';
  posterDetailedimg: string = '';
  idAffiche: number = 0; // Initialize idAffiche

  constructor(private posterService: PosterService, private route: ActivatedRoute) {}


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idAffiche = params['id'] || 0;
      if (this.idAffiche) {
        this.posterService.getPosterByid(this.idAffiche).subscribe(
          (result) => {
            this.posterData = result;
            console.log("../../../../backend/affiches/ " +  this.posterData.image);
          },
          (error) => {
            console.error('Error fetching for a poster');
          }
        );
      } else {
        console.error('idAffiche not found');
      }
    });
  }


  onImageChange(event: any) {
    // No need to assign values here
    console.log(this.posterData.image);
  }

  onDetailedImageChange(event: any) {
    // No need to assign values here
    console.log(this.posterData.couverture);
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
      idAffiche: this.idAffiche 
    };

    this.posterService.updateposter(this.idAffiche, poster).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
