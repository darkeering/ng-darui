import { NgModule } from "@angular/core";
import { FullscreenLaunchDirective } from "./full-screen-launch.directive";
import { FullscreenTargetDirective } from "./full-screen-target.directive";
import { FullScreenComponent } from "./full-screen.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    FullScreenComponent,
    FullscreenLaunchDirective,
    FullscreenTargetDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullScreenComponent,
    FullscreenLaunchDirective,
    FullscreenTargetDirective
  ],
  providers: [
  ]
})
export class FullScreenModule {}