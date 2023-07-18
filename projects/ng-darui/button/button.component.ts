import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dar-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  /**
   * Button Type: `'primary' | 'secondary' | 'danger'`
   * @description 按钮类型
   * @default primary
   * @type 'primary' | 'secondary' | 'danger'
   */
  @Input() type: string = 'primary'
  
  @Input() disabled = false

  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.btnClick.emit('event')
  }


}
