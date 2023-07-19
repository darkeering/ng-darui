import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
const linear = 'cubic-bezier(0.16, 0.75, 0.5, 1)';
const duration = '0.2s';
@Component({
  selector: 'dar-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  animations: [
    trigger('flyInOut', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
          left: 0,
          opacity: 0,
        })
      ),
      state(
        'in',
        style({
          transform: 'translateX(0)',
          left: 0,
          opacity: 1,
        })
      ),
      transition('in => void', [animate(`${duration} ${linear}`)]),
      transition('void => in', [animate(`${duration} ${linear}`)]),
    ]),
    trigger('backbgFadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      state(
        'in',
        style({
          opacity: 0.5,
          display: 'block',
        })
      ),
      transition('void => in', [animate(`${duration} ${linear}`)]),
      transition('in => void', [animate(`${duration} ${linear}`)]),
    ]),
  ],
})
export class DrawerComponent implements OnInit {
  isOpen = true;
  constructor() {}

  ngOnInit(): void {}

  onHide() {}

  hide() {
    this.isOpen = false;
  }
  aimationDone() {
    if (!this.isOpen) {
      this.onHide();
    }
  }
}
