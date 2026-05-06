import { TestBed } from '@angular/core/testing';

import { FormatearPrecio } from './formatear-precio';

describe('FormatearPrecio', () => {
  let service: FormatearPrecio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatearPrecio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
