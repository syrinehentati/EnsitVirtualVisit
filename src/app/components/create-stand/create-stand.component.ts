import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-stand',
  templateUrl: './create-stand.component.html',
  styleUrl: './create-stand.component.scss'
})
export class CreateStandComponent {
  standData: any = {};
  submitstandForm(form:NgForm){}
  
  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const preview = document.getElementById('imagePreview') as HTMLImageElement;
      preview.src = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);

  }
}
