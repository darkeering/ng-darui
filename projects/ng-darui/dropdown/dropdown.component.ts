import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
const duration = '0.2s';
@Component({
  selector: 'dar-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations: [
    trigger('toggle', [
      state(
        'void',
        style({
          transform: 'scaleY(0)',
          opacity: 0,
          transformOrigin: 'top',
        })
      ),
      state(
        'show',
        style({
          transform: 'scaleY(1)',
          opacity: 1,
          transformOrigin: 'top',
        })
      ),
      transition('void => show', animate(`${duration}`)),
      transition('show => void', animate(`${duration}`)),
    ]),
  ],
})
export class DropdownComponent implements OnInit {
  _source: any[] = [];
  @Input()
  set source(value: any[]) {
    this._source = value.map((item: any) => {
      if (typeof item === 'string') {
        return { name: item };
      } else {
        return item;
      }
    });
  }
  get source() {
    return this._source;
  }

  @Output('selectItem') selectItemEmit = new EventEmitter();

  isOpen = false;
  hoverIndex = -1;

  constructor(private elememtRef: ElementRef) {}

  ngOnInit(): void {}

  selectItem(item: any) {
    this.selectItemEmit.emit(item);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  setHoverIndex($event: any, index: any) {
    if ($event) {
      this.hoverIndex = index;
    } else {
      this.hoverIndex = -1;
    }
  }

  @HostListener('document:click', ['$event.target']) onDocumentClick(
    target: any
  ) {
    if (!this.isOpen) return;
    if (!this.elememtRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }

  @HostListener('window:keyup.arrowdown', ['$event']) onArrowDown(
    event: Event
  ) {
    const { hoverIndex, _source } = this;
    if (hoverIndex + 1 === _source.length) this.hoverIndex = 0;
    else this.hoverIndex++;
  }

  @HostListener('window:keyup.arrowup', ['$event']) onArrowUp(event: Event) {
    const { hoverIndex, _source } = this;
    if (hoverIndex === 0) this.hoverIndex = _source.length - 1;
    else this.hoverIndex--;
  }
}
