import { Component, OnInit, Input } from '@angular/core';
import { data } from 'src/app/modelos/data';

import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-bajo-portada-desktop',
  templateUrl: './bajo-portada-desktop.component.html',
  styleUrls: ['./bajo-portada-desktop.component.css']
})
export class BajoPortadaDesktopComponent implements OnInit {
  @Input('data') nota:any;

  fecha:any;
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string ='rgba(133, 133, 133, 0.432)'


  constructor(public crudService:CrudService) {

  }

  ngOnInit(): void {


    this.fecha = this.crudService.fechaPipe(new Date(this.nota.fecha))
  }


 agregarVista(value){
  this.crudService.unProducto = value
this.crudService.unProducto.vistas = this.crudService.unProducto.vistas + 1

if( value._id )
{

this.crudService.modificarProducto(this.crudService.unProducto)
.subscribe(res => {

                          });

}

else  {
  //  this.crudService.unProducto.vistas = 0
  //    this.crudService.addProducto(this.crudService.unProducto).subscribe(res => { console.log(res) })
}
};

}

