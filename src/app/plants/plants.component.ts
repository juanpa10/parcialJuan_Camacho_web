import { Component, OnInit } from '@angular/core';
import { PlantService } from './plant.service';
import { Plant } from './plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  constructor(private servicioPlanta: PlantService) { }
  plantas: Array<Plant> = []; 
  plantasExterior=0;
  plantasInterior=0;

  ngOnInit() {
    this.obtenerPlantas();
    this.calcularTotalPlantas();
  }
  obtenerPlantas() {
    this.servicioPlanta.obtenerPlantas().subscribe({
      next: (data) => {
        this.plantas = data;
      },
      error: (error) => {
        console.error('error:', error);
      }
    });
  } 
  calcularTotalPlantas(){
    for(let i=0; i<this.plantas.length; i++){
      this.plantasExterior = this.plantas.filter(plant => plant.tipo === 'Exterior').length;
      this.plantasInterior = this.plantas.filter(plant => plant.tipo === 'Interior').length;
    }
  }

}
