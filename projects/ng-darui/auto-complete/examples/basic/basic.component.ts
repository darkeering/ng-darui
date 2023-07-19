import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AutoCompleteModule } from 'ng-darui/auto-complete';
import { TextInputModule } from 'ng-darui/text-input';

@Component({
  selector: 'dar-auto-complete-basic-example',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  standalone: true,
  imports: [CommonModule, AutoCompleteModule, TextInputModule],
})
export class DarAutoCompletePopupBasicExampleComponent {
  source = ['C++', 'Java', 'Javascript', 'PHP', 'Python', 'Go'];
  constructor() {}

  selectValue(event: any) {
    console.log('selectValue', event);
  }
}
