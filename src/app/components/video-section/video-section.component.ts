import { Component } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.scss'
})
export class VideoSectionComponent {
  startVirtualVisit(): void {
    // Get the avatar URL from localStorage
    const avatarUrl = localStorage.getItem("url");
    console.log(avatarUrl);

    // Redirect to the new page with the avatar URL as a parameter
    if (avatarUrl) {
      window.location.href = `http://localhost:8765?avatar=${encodeURIComponent(avatarUrl)}`;
    } else {
      // Handle the case when the avatar URL is not found in localStorage
      console.error("Avatar URL not found in localStorage");
    }
  }

}
