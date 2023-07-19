import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[darTextInput]'
})
export class TextInputDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) {}
  ngOnInit(): void {
    let {nativeElement} = this.el
    this.render.addClass(nativeElement, 'dar-text-input')
  }

}
