import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-bajoportada',
  templateUrl: './bajoportada.component.html',
  styleUrls: ['./bajoportada.component.css']
})
export class BajoportadaComponent implements OnInit {
  @Input('data') nota:any;
  urlImage:string;
  fecha:any
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.fecha = this.crudService.fechaPipe(new Date(this.nota.fecha))
    this.urlImage = "http://192.168.43.55:3000/upload/" + this.cut(this.nota.imagen1)
  }
  cut(value){
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
