import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownModule } from 'ng-darui/dropdown/dropdown.module';

@Component({
  selector: 'dar-drop-down-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, DropdownModule],
})
export class DarDropdownBasicExampleComponent {
  source = ['C++', 'Java', 'Javascript', 'PHP', 'Python', 'Go'];

  constructor() {}

  ngOnInit(): void {}

  selectItem($event: any) {
    console.log($event);
  }
}
