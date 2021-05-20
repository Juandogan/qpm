import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../servicios/crud.service';

import * as moment from 'moment'

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  @Input('data') nota:any;
  public urlImage:string
  public corteString:string;
  public fecha:any
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    
    this.corteString = this.cut(this.nota.imagen1)
    this.fecha = this.crudService.fechaPipe(new Date(this.nota.fecha))
    this.urlImage = "http://192.168.43.55:3000/upload/" + this.corteString
    
  }
  
                
  cut(value){
    var corte = value.slice(8)

   return corte
 };

 agregarVista(value){
   this.crudService.loading=true;
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
