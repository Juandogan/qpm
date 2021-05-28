import { Component, OnInit, Input } from '@angular/core';
import { ClimaService } from 'src/app/servicios/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  @Input('dia') dia:number;


  public detallesHoy:any;
  public detallesProximos:any;
  public clima:any;
  public temMaxclima:any;
  public temMinclima:any;
  public loading:boolean = true
  nube = false
  lluvia = false
  solnubes = false
  sol = false

  constructor(public climaService:ClimaService) { }

async  ngOnInit() {



    // const datosDeUbicacion = await this.climaService.obtenerDatosUbicacion();
    // this.city = datosDeUbicacion.city;
    // this.region_name = datosDeUbicacion.region_name;
    // this.country_name = datosDeUbicacion.country_name;
    // const { latitude, longitude } = datosDeUbicacion;
    // Obtener, ahora, los datos del clima



    const datosDeClima = await this.climaService.obtenerDatosDeClima("-57.8397", "-38.2703");
    // Cortamos el arreglo para mostrar la de hoy, y también las siguientes
    this.detallesHoy = datosDeClima.dataseries.slice(0, 1)[0];
    this.detallesProximos = datosDeClima.dataseries.slice(1, 5);
    this.clima = datosDeClima.dataseries[this.dia].weather
    this.temMaxclima = datosDeClima.dataseries[this.dia].temp2m.max
    this.temMinclima = datosDeClima.dataseries[this.dia].temp2m.min
    this.loading = false;
    var datos = datosDeClima
    localStorage.setItem('clima',  JSON.stringify(datos))

    console.log(datosDeClima)

    if(this.clima === 'lightrain'){
      this.lluvia = true
    }
    if(this.clima === 'rain'){
      this.lluvia = true
    }

    if(this.clima === 'clear'){
      this.sol = true
    }

    if(this.clima === 'cloudy'){
      this.nube = true}
      if(this.clima === 'mcloudy'){
        this.nube = true}


   if(this.clima === 'pcloudy'){
    this.solnubes = true}
 };



}
