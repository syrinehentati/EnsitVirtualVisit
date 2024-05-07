import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Stand } from '../../Model/Stand';
import { StandService } from '../../services/stand.service';

@Component({
  selector: 'app-create-stand',
  templateUrl: './create-stand.component.html',
  styleUrl: './create-stand.component.scss'
})
export class CreateStandComponent {
  
  standData: Stand = {
    nom: '',
    sujet: '',
    description: '',
    image: '',
    standType: 1,
    prix: 0,
    existant: false,
    lien: '',
    idStand: 0
  };


  standImage!: string ;

  constructor(private standService: StandService, private router: Router) {}

  onImageChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.standImage = file.name; // Store the file name in standImage
      console.log(this.standImage);
    }
  }
  

  

  
  // Method to submit the form
  submitstandForm(form: NgForm) {
    const stand: Stand = {
      nom: form.value.nom,
      sujet: form.value.sujet,
      description: form.value.description,
      image: this.standImage ,
      standType: form.value.standType,
      prix: form.value.prix,
      existant: form.value.existant,
      lien: form.value.lien,
      idStand: 0
    };

    this.standService.addStand(stand).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
