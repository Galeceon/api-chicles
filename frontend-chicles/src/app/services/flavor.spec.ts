import { TestBed } from '@angular/core/testing';

import { Flavor } from './flavor';

describe('Flavor', () => {
  let service: Flavor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flavor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
