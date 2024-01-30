import { TestBed } from '@angular/core/testing';

import { PushvehiclesService } from './pushvehicles.service';

describe('PushvehiclesService', () => {
  let service: PushvehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushvehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
