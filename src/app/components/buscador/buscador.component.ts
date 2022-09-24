import { Component, OnInit } from '@angular/core';
import { ClimateServiceService } from '../../services/climate-service.service';
import { Ciudad, Clima } from '../../models/models';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  nombreCiudadPatron = new FormControl('', [Validators.pattern('^[a-zA-Z ]*$')]);

  nombreCiudad!: string;
  ciudadConsultada!: Ciudad;

  buscarCiudad(ciudad: string) {
    
    this.climateService.getCiudad(ciudad).subscribe((ciudad: any) => {
      if(ciudad.length!=0){
        this.climateService.setCiudadSeleccionada = ciudad[0];
    
        this.ciudadConsultada = ciudad[0];
        
        this.climateService.getClima(this.ciudadConsultada.lat, this.ciudadConsultada.lon).subscribe((clima: any) => {
          this.climateService.setClimaCiudad=clima.list.slice(0,3);
          console.log(this.climateService.getClimaCiudad);
        }
  
        )
        this.nombreCiudad='';
      }else {
        alert('La ciudad '+ this.nombreCiudad+ ' no existe. Intente de nuevo.');
      }
      
    })
  

  }

  constructor(private climateService: ClimateServiceService) { }

  ngOnInit(): void {}

}
