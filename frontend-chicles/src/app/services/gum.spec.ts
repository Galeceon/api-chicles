import { TestBed } from '@angular/core/testing';

import { Gum } from './gum';

describe('Gum', () => {
  let service: Gum;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gum);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
