import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectedOverlayPositionChange,
  ConnectedPosition,
  VerticalConnectionPos,
} from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
const duration = '0.2s';
@Component({
  selector: 'dar-auto-complete-popup',
  templateUrl: './auto-complete-popup.component.html',
  styleUrls: ['./auto-complete-popup.component.css'],
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
export class AutoCompletePopupComponent implements OnInit {
  isOpen = false;
  source: any;
  origin!: CdkOverlayOrigin;

  width!: number;

  inputCode = '';

  onChange = (_: any) => null;
  constructor() {}

  ngOnInit(): void {}

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  selectValue(item: any, event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.onChange({ value: item });
  }
}
