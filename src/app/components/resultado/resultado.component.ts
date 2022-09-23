import { Component, OnInit } from '@angular/core';
import { ClimateServiceService } from 'src/app/services/climate-service.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {


  getClimaCiudad(){
    return this.climateService.getClimaCiudad;
  }

  getCiudad(){
    return this.climateService.getCiudadSeleccionada;
  }

  constructor(private climateService: ClimateServiceService) { }

  ngOnInit(): void {
  }

}
