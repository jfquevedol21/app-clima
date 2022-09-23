import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Ciudad, Clima } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimateServiceService {

  private ciudadSeleccionada!:Ciudad;
  private climaCiudad : Clima[] = [];
  

  public get getCiudadSeleccionada(){
    return this.ciudadSeleccionada;
  }

  public set setCiudadSeleccionada(_ciudadSeleccionada:Ciudad){
    this.ciudadSeleccionada=_ciudadSeleccionada;
  }

  public get getClimaCiudad(){
    return this.climaCiudad;
  }

  public set setClimaCiudad(_climaCiudad: Clima[]){
    this.climaCiudad=_climaCiudad;
  }

  constructor(private http: HttpClient) { }

  getCiudad(ciudad: string):Observable<Ciudad>{
    return this.http.get<Ciudad>(environment.apiCiudad.api+'q='+ciudad+'&limit=1&appid='+environment.key);
  }

  getClima(lat: number, lon: number):Observable<Clima[]>{
    return this.http.get<Clima[]>(environment.apiClima.api+'lat='+lat+'&lon='+lon+'&appid='+environment.key+'&units=metric');
  } 
}
