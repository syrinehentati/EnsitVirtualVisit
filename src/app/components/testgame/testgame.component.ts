import { Component } from '@angular/core';

@Component({
  selector: 'app-testgame',
  templateUrl: './testgame.component.html',
  styleUrl: './testgame.component.scss'
})
export class TestgameComponent {


  ngOnInit() {
    //@ts-ignore
    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "/assets/EnsitVirtualVisit/Build/EnsitVirtualVisit.data",
      frameworkUrl: "/assets/EnsitVirtualVisit/Build/EnsitVirtualVisit.framework.js",
      codeUrl: "/assets/EnsitVirtualVisit/Build/EnsitVirtualVisit.wasm",
      streamingAssetsUrl: "StreamingAssets",
      productName: "EnsitVirtualVisit",
      productVersion: "1.0"
    });
  }
  
}

