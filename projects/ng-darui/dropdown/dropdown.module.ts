import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UtilsModule } from '../utils/utils.module';
import { IconsModule } from '../icons';
import { DropdownComponent } from './dropdown.component';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    UtilsModule,
    IconsModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
