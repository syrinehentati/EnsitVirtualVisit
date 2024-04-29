import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-avatar',
  templateUrl: './table-avatar.component.html',
  styleUrls: ['./table-avatar.component.scss']
})
export class TableAvatarComponent {

  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  @ViewChild('preview') preview: ElementRef | undefined;

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0]; // Optional chaining
    
    if (this.preview && this.preview.nativeElement && file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.preview && this.preview.nativeElement) {
          this.preview.nativeElement.src = reader.result as string;
          this.preview.nativeElement.style.display = 'block';
        }
      };
      reader.readAsDataURL(file);
    } else if (this.preview && this.preview.nativeElement) {
      this.preview.nativeElement.src = '#';
      this.preview.nativeElement.style.display = 'none';
    }
  }
}
