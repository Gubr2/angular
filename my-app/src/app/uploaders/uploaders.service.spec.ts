import { TestBed } from '@angular/core/testing';

import { UploadersService } from './uploaders.service';

describe('UploadersService', () => {
  let service: UploadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
