import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { DragDropModule } from 'ng-darui/drag-drop';

@Component({
  selector: 'dar-drag-drop-basic-example',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  standalone: true,
  imports: [CommonModule, DragDropModule],
})
export class DarDragDropBasicExampleComponent {
  constructor(
    private render: Renderer2
  ) {}

  list1: any = ['c++', 'jave', 'js', 'python'];
  list2: any[] = [];

  ngOnInit(): void {}

  drop(event: any) {
    const { parentNode, currentDrag } = event;
    this.render.removeChild(parentNode, currentDrag);
    this.list2.push(currentDrag.textContent);
  }
}
