import { TestBed } from '@angular/core/testing';

import { AsynRequestService } from './asyn-request.service';

describe('AsynRequestService', () => {
  let service: AsynRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsynRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
