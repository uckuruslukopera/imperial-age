import { TestBed } from '@angular/core/testing';

import { TitleService } from './title.service';

describe('TitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitleService = TestBed.get(TitleService);
    expect(service).toBeTruthy();
  });

  it('should set the title', () => {
    const service: TitleService = TestBed.get(TitleService);
    service.setTitle('Waterbottle');
    expect(service.title$.value).toBe('Waterbottle');
  });
});
