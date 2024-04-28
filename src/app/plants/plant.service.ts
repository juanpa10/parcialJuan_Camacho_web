import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from './plant';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl: string = environment.baseUrl + '7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';
  constructor(private http: HttpClient) { }

  obtenerPlantas(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }

}
