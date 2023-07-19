import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipModule } from 'ng-darui/tooltip/tooltip.module';

@Component({
  selector: 'dar-tooltip-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, TooltipModule],
})
export class DarTooltipBasicExampleComponent {
}
