import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { CrudHostServiceService } from './crud-host-service.service';

describe('CrudHostServiceService', () => {
  let service: CrudHostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudHostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
