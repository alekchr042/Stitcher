import { TestBed } from '@angular/core/testing';

import { ApiFlossesService } from './api-flosses.service';

describe('ApiFlossesService', () => {
  let service: ApiFlossesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFlossesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
