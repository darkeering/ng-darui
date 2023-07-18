import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'ng-darui/button';

@Component({
    selector: 'dar-button-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css'],
    standalone: true,
    imports: [CommonModule, ButtonModule]
})
export class DarButtonBasicExampleComponent {
    constructor() {}
}
