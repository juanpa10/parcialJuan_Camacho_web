import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlantsModule } from './plants/plants.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantService } from './plants/plant.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PlantsModule,
        HttpClientTestingModule
      ],
      declarations: [AppComponent],
      providers: [PlantService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});