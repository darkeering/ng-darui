import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'ng-darui/panel';

@Component({
  selector: 'dar-panel-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, PanelModule],
})
export class DarPanelBasicExampleComponent {
}
