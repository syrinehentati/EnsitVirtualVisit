import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-page-stand',
  templateUrl: './edit-page-stand.component.html',
  styleUrls: ['./edit-page-stand.component.scss']
})
export class EditPageStandComponent {
  standData: any = {
    standName: 'geeks',
    standImage:'../../../assets/img/poster.png',
    standSubject:'this is a subject for a stand of geeks',
    standDescription: 'This is a description for a stand of geeks ',
    standURL: 'ww.facebook.com/geeks',
    standType:'Type1',
    standPrice:'12',
    standExisting: 'yes'
  };

  submitstandForm(form: NgForm) {}

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.standData.standImage = e.target.result;
        this.checkImageDimensions(event, 'standDimensions');
      };
      reader.readAsDataURL(file);
    }
  }

  
  previewImage(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const preview = document.getElementById('imagePreview') as HTMLImageElement;
      preview.src = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);
    this.standData.standURL = event.target.files[0]; 
  }

  checkImageDimensions(event: any, dimensionSpanId: string) {
    const fileInput = event.target;
    const files = fileInput.files;
    if (files.length > 0) {
      const img = new Image();
      img.src = URL.createObjectURL(files[0]);
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        const preferredWidth = 40;
        const preferredHeight = 60;
        const widthDifference = Math.abs(width - preferredWidth);
        const heightDifference = Math.abs(height - preferredHeight);
        const threshold = 20; // Difference less than or equal to this will not trigger red color
        const dimensionSpan = document.getElementById(dimensionSpanId) as HTMLElement; // Cast to HTMLElement
        if (widthDifference > threshold || heightDifference > threshold) {
          fileInput.style.border = "1px solid red"; // Apply red border to input field
          dimensionSpan.style.color = "red"; // Apply red color to dimension text
        } else {
          fileInput.style.border = ""; // Remove red border
          dimensionSpan.style.color = ""; 
        }
      };
    }
  }
}
