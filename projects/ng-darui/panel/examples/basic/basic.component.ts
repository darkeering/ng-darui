import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'ng-darui/panel/panel.module';
import { ButtonModule, FullScreenModule } from 'ng-darui/public-api';

@Component({
  selector: 'dar-panel-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, PanelModule],
})
export class DarPanelBasicExampleComponent {
}
