import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ng-darui/carousel';

@Component({
    selector: 'dar-carouse-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css'],
    standalone: true,
    imports: [CommonModule, CarouselModule]
})
export class DarCarouseBasicExampleComponent {
    constructor() {}
}
