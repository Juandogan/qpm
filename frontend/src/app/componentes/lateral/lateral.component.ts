import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {

  @Input('data') nota:any;
  urlImage:string;

  fecha:any;
  i:number = 0;

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {



    this.urlImage = "https://www.quepasamiramar.com.ar/upload/" + this.cut(this.nota[0].imagen1)

        // this.fecha = this.crudService.fechaPipe(new Date(this.nota.fecha))

  }

  cut(value:string){
    var corte = value.slice(8)

   return corte
 };


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
