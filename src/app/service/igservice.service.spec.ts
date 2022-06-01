import { TestBed } from '@angular/core/testing';

import { IgserviceService } from './igservice.service';

describe('IgserviceService', () => {
  let service: IgserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
