import { TestBed } from '@angular/core/testing';

import { CreatestudentsService } from './createstudents.service';

describe('CreatestudentsService', () => {
  let service: CreatestudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatestudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
