import { TestBed } from '@angular/core/testing';

import { TodocommonService } from './todocommon.service';

describe('TodocommonService', () => {
  let service: TodocommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodocommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
