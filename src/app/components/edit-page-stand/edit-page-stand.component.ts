import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Stand } from '../../Model/Stand';
import { StandService } from '../../services/stand.service';

@Component({
  selector: 'app-edit-page-stand',
  templateUrl: './edit-page-stand.component.html',
  styleUrls: ['./edit-page-stand.component.scss']
})
export class EditPageStandComponent {
  
  standData: Stand = {
    nom: '',
    sujet: '',
    description: '',
    image: '',
    standType: 1,
    prix: 0,
    existant: false,
    lien: '',
    idStand: 1
  };

  standImage: string = ''; // Initialize properties
  detailedImage: string = '';
  
  idStand: number = 0; // Initialize idAffiche
 

  constructor(private standService: StandService, private route: ActivatedRoute) {}


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idStand = params['id'] || 0;
      if (this.idStand) {
        this.standService.getStandById(this.idStand).subscribe(
          (result) => {
            this.standData = result;
            this.standImage=result.image;
            console.log("../../../../backend/affiches/ " +  result.image);
          },
          (error) => {
            console.error('Error fetching for a stand');
          }
        );
      } else {
        console.error('idStand not found');
      }
    });
  }


  onImageChange(event: any) {
    // No need to assign values here
    console.log(this.standData.image);
  }

 

  // Method to submit the form
  submitstandForm(form: NgForm) {
    const stand: Stand = {
      nom: form.value.nom,
      sujet: form.value.sujet,
      description: form.value.description,
      image: this.standImage,
      standType: form.value.standType,
      prix: form.value.prix,
      existant: form.value.existant,
      lien: form.value.lien,
      idStand: this.idStand 
    };

    this.standService.updateStand(this.idStand, stand).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
