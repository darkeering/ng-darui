import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDaruiComponent } from './ng-darui.component';

describe('NgDaruiComponent', () => {
  let component: NgDaruiComponent;
  let fixture: ComponentFixture<NgDaruiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDaruiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDaruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
