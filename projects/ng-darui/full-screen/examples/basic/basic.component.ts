import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule, FullScreenModule } from 'ng-darui/public-api';

@Component({
  selector: 'dar-full-screen-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, FullScreenModule, ButtonModule],
})
export class DarFullScreenBasicExampleComponent {
  isFull1 = false
  isFull2 = false
  constructor() { }

  toggleFullScreen1(status: boolean) {
    this.isFull1 = status
    console.log('toggleFullScreen1', status);
    
  }
  toggleFullScreen2(status: boolean) {
    this.isFull2 = status
    console.log('toggleFullScreen2', status);
  }
}
