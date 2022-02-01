import { TestBed } from '@angular/core/testing';
import { SailboatsService } from './sailboats.service';

describe('SailboatsService', () => {
  let service: SailboatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SailboatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
