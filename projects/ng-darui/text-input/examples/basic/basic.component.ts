import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextInputModule } from 'ng-darui/text-input';

@Component({
  selector: 'dar-text-input-basic-example',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  standalone: true,
  imports: [CommonModule, TextInputModule],
})
export class DarAutoCompletePopupBasicExampleComponent {
}
