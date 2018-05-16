import { TestBed, inject } from '@angular/core/testing';

import { ObjetosService } from './objetos.service';

describe('ObjetosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjetosService]
    });
  });

  it('should be created', inject([ObjetosService], (service: ObjetosService) => {
    expect(service).toBeTruthy();
  }));
});
