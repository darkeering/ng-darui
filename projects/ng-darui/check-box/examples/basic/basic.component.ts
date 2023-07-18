import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckBoxModule } from 'ng-darui/check-box';

@Component({
    selector: 'dar-checkbox-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css'],
    standalone: true,
    imports: [CommonModule, CheckBoxModule]
})
export class DarCheckboxBasicExampleComponent {
    constructor() {}
}
