import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'ng-darui/button';
import { TableModule } from 'ng-darui/table';

@Component({
  selector: 'dar-table-basic-example',
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
})
export class DarTableBasicExampleComponent {
  @ViewChild('action') action: any;
  colsConfig: any = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'age',
      title: 'Age',
    },
    {
      key: 'address',
      title: 'Address',
    },
    {
      key: 'tags',
      title: 'Tags',
    },
    {
      key: 'action',
      title: 'Action',
    },
  ];
  data: any = [
    {
      name: 'Eason',
      age: '18',
      address: '辽宁，大连',
      tags: 'NICE',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.colsConfig = [
      {
        key: 'name',
        title: 'Name',
      },
      {
        key: 'age',
        title: 'Age',
      },
      {
        key: 'address',
        title: 'Address',
      },
      {
        key: 'tags',
        title: 'Tags',
      },
      {
        key: 'action',
        title: 'Action',
        render: this.action,
      },
    ];
  }
}
