import { TestBed } from '@angular/core/testing';

import { CamisetascarritoService } from './camisetascarrito.service';

describe('CamisetascarritoService', () => {
  let service: CamisetascarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisetascarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
