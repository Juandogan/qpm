import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-bajo-portada-mobile',
  templateUrl: './bajo-portada-mobile.component.html',
  styleUrls: ['./bajo-portada-mobile.component.css']
})
export class BajoPortadaMobileComponent implements OnInit {
  @Input('data') nota:any;

  fecha:any;
  color:string='rgb(0, 0, 0);'
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    this.fecha = this.crudService.fechaPipe(new Date(this.nota.fecha))
  }



 agregarVista(value){
  this.crudService.unProducto = value
this.crudService.unProducto.vistas = this.crudService.unProducto.vistas + 1
console.log(this.crudService.unProducto.vistas)
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
