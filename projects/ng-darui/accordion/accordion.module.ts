import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { AccordionMenuComponent } from './accordion-menu/accordion-menu.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { IconsModule } from '../icons';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionListComponent,
    AccordionMenuComponent,
    AccordionItemComponent
  ],
  imports: [
    IconsModule,
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionListComponent,
    AccordionMenuComponent,
    AccordionItemComponent
  ]
})
export class AccordionModule { }
