import { Component} from '@angular/core';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-create-avatar',
  templateUrl: './create-avatar.component.html',
  styleUrls: ['./create-avatar.component.scss'] // Corrected property name and added square brackets
})
export class CreateAvatarComponent {
  
  avatarData: any = {};


  constructor(private avatarService: AvatarService) { }

  submitAvatarForm() {
    // Store the form data using the service
    this.avatarService.setAvatarData(this.avatarData);
  }
  previewImage(event: any) {
    // Handle image preview logic here
    const reader = new FileReader();
    reader.onload = () => {
      const preview = document.getElementById('imagePreview') as HTMLImageElement;
      preview.src = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);

    // Store image data
    this.avatarData.avatarImage = event.target.files[0];
  }
}
