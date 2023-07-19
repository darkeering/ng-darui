import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TagsInputModule } from 'ng-darui/tags-input';

@Component({
  selector: 'dar-tags-input-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, TagsInputModule],
})
export class DarTagsInputBasicExampleComponent {
  source = ['c++', 'jave', 'javascript'];
}
