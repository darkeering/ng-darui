import { OverlayModule } from "@angular/cdk/overlay";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AutoCompletePopupComponent } from "./auto-complete-popup.component";
import { AutoCompleteDirective } from "./auto-complete.directive";
import { FilterPipe } from './filter.pipe';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AutoCompletePopupComponent,
    AutoCompleteDirective,
    FilterPipe
  ],
  imports: [
    OverlayModule,
    CommonModule,
  ],
  exports: [
    AutoCompletePopupComponent,
    AutoCompleteDirective
  ]
})
export class AutoCompleteModule { }