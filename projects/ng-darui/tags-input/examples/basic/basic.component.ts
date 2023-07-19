import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TagsInputModule } from 'ng-darui/tags-input/tags-input.module';
import { TagsModule } from 'ng-darui/tags/tags.module';

@Component({
  selector: 'dar-tags-input-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, TagsInputModule],
})
export class DarTagsInputBasicExampleComponent {
  source = ['c++', 'jave', 'javascript'];
}
