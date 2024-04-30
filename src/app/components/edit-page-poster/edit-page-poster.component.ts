import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Poster } from '../../Model/Poster';
import { PosterService } from '../../services/poster.service';

@Component({
  selector: 'app-edit-page-poster',
  templateUrl: './edit-page-poster.component.html',
  styleUrls: ['./edit-page-poster.component.scss']
})
export class EditPagePosterComponent implements OnInit {

  posterData: Poster = {
    titre: '',
    sujet: '',
    description: '',
    image: null, // Allow null values for image
    couverture: null, // Allow null values for couverture
    localisationAffiche: 1,
    prix: 0,
    existant: false,
    lien: '',
    idAffiche: 1
  };

  posterImage: File | null = null;
  detailedImage: File | null = null;
  idAffiche: number = 0;

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
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.posterImage = file;
      console.log(this.posterImage);
    }
  }

  onDetailedImageChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.detailedImage = file;
      console.log(this.detailedImage);
    }
  }

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
