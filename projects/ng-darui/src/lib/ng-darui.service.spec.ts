import { TestBed } from '@angular/core/testing';

import { NgDaruiService } from './ng-darui.service';

describe('NgDaruiService', () => {
  let service: NgDaruiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDaruiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
