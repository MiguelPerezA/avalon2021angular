import { TestBed } from '@angular/core/testing';

import { LibrosRestService } from './libros-rest.service';

describe('LibrosRestService', () => {
  let service: LibrosRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
