import { TestBed } from '@angular/core/testing';

import { JobgroupService } from './jobgroup.service';

describe('JobgroupService', () => {
  let service: JobgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
