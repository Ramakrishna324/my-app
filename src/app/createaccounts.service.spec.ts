import { TestBed } from '@angular/core/testing';

import { CreateaccountsService } from './createaccounts.service';

describe('CreateaccountsService', () => {
  let service: CreateaccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateaccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
