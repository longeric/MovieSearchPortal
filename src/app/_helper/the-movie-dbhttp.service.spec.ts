import { TestBed } from '@angular/core/testing';

import { TheMovieDBHttpService } from './the-movie-dbhttp.service';

describe('TheMovieDBHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheMovieDBHttpService = TestBed.get(TheMovieDBHttpService);
    expect(service).toBeTruthy();
  });
});
