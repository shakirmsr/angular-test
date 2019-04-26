import { TestBed } from '@angular/core/testing';

import { HeroItemsService } from './hero-items.service';

describe('HeroItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroItemsService = TestBed.get(HeroItemsService);
    expect(service).toBeTruthy();
  });
});
