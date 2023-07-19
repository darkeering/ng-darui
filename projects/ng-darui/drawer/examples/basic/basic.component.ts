import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule, DrawerModule, DrawerService } from 'ng-darui/public-api';

@Component({
  selector: 'dar-drawer-basic-example',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  standalone: true,
  imports: [CommonModule, DrawerModule, ButtonModule],
})
export class DarDrawerBasicExampleComponent {
  constructor(private drawerService: DrawerService) {}

  ngOnInit(): void {}
  onClick(event: any) {
    this.drawerService.open();
  }
  show() {
    this.drawerService.show();
  }
  hide() {
    this.drawerService.hide();
  }
}
