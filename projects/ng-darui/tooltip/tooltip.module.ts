import { NgModule } from "@angular/core";
import { TooltipDirective } from "./tooltip.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TooltipDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective
  ]
})
export class TooltipModule {}