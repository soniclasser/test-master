import { TestBed } from '@angular/core/testing';

import { FormatsService } from './formats.service';

describe('FormatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatsService = TestBed.get(FormatsService);
    expect(service).toBeTruthy();
  });
});
