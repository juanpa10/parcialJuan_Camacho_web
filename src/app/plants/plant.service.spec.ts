/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantService } from './plant.service';

describe('PlantService', () => {
  let service: PlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService]
    });
    service = TestBed.inject(PlantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add more tests for PlantService here
});