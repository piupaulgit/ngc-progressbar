import { TestBed } from '@angular/core/testing';

import { NgcProgressbarService } from './ngc-progressbar.service';

describe('NgcProgressbarService', () => {
  let service: NgcProgressbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgcProgressbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
