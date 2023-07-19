import { NgModule } from "@angular/core";
import { TextInputDirective } from "./text-input.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TextInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextInputDirective
  ]
})
export class TextInputModule {}