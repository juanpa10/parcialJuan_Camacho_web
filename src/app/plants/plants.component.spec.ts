import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantsComponent } from './plants.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ PlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;
    component.plantas = [
      {
        id: 12, altura_maxima: 123, 
        sustrato_siembra: 'tierra', 
        nombre_comun: 'Orquidea Blanca', 
        tipo: 'Interior', 
        clima: 'Templado, cálido',
        nombre_cientifico: 'Orquidias maximus'
      },
      {
        nombre_comun: 'Rosa', tipo: 'Exterior', clima: 'Todos',
        id: 22,
        nombre_cientifico: 'Rosus',
        altura_maxima: 2,
        sustrato_siembra: 'Tierra'
      },
      {
        nombre_comun: 'Clavel', tipo: 'Interior', clima: 'Templado, cálido',
        id: 32,
        nombre_cientifico: 'Clavelus',
        altura_maxima: 14,
        sustrato_siembra: 'Tierra'
      }
    ];
    fixture.detectChanges(); 
  });

  it('should create tabla con 3 filas extras a la cabeza', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tr');
    expect(rows.length).toEqual(4);
  });
});