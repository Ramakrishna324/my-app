import { TestBed } from '@angular/core/testing';

import { ViewtaskService } from './viewtask.service';

describe('ViewtaskService', () => {
  let service: ViewtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
