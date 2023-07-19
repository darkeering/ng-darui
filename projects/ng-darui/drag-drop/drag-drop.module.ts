import { NgModule } from "@angular/core";
import { DragDropService } from "./drag-drop.service";
import { DraggableDirective } from "./draggable.directive";
import { DroppableDirective } from "./droppable.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DraggableDirective,
    DroppableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DraggableDirective,
    DroppableDirective
  ],
  providers: [
    DragDropService
  ]
})
export class DragDropModule { }