import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[darHoverIndex]'
})
export class HoverIndexDirective {

  @Output() darHoverIndex = new EventEmitter()

  constructor(

  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.darHoverIndex.emit(true)
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.darHoverIndex.emit(false)
  }

}
