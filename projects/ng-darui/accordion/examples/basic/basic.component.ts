import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'ng-darui/accordion';

@Component({
    selector: 'dar-accordion-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css'],
    standalone: true,
    imports: [CommonModule, AccordionModule]
})
export class DarAccordionBasicExampleComponent {
    data = [
        {
          title: 'Title 1',
          children: [
            {
              title: 'Title 1.1',
              children: [
                {
                  title: 'Title 1.1.1'
                }
              ]
            },
            {
              title: 'Title 1.2'
            },
          ]
        },
        {
          title: 'Title 2'
        }
      ]
    constructor() {}
}
