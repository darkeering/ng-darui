import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { IconsModule } from '../icons';
import { TextInputModule } from 'ng-darui/text-input';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    TextInputModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
