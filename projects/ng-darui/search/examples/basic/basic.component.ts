import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchModule } from 'ng-darui/search/search.module';
import { TextInputModule } from 'ng-darui/text-input';

@Component({
  selector: 'dar-panel-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, SearchModule],
})
export class DarSearchBasicExampleComponent {
  onSearch(event: any) {
    console.log(event);
  }
}
