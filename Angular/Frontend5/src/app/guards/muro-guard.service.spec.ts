import { TestBed } from '@angular/core/testing';

import { MuroGuardService } from './muro-guard.service';

describe('MuroGuardService', () => {
  let service: MuroGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuroGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
