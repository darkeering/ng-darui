import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TagsModule } from 'ng-darui/tags/tags.module';

@Component({
  selector: 'dar-tags-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, TagsModule],
})
export class DarTagsBasicExampleComponent {
  tagList = [
    {
      name: 'label1'
    },
    {
      name: 'label2'
    },
    {
      name: 'label3'
    },
    {
      name: 'label4'
    },
  ]
}
