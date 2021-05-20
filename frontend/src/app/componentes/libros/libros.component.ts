import { Component, OnInit } from '@angular/core';
import { CrudService} from '../../servicios/crud.service'
import { Producto } from '../../modelos/producto'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  productos:any
  loading=true;

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    
    this.pedirProductos()

  }


  
  pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.

        
    this.crudService.getProductos().subscribe(res =>{
    //this.crudService.productos = res as Producto[];  // guardo resultados de la peticion en el servicio
    this.productos = res as Producto[]; // guardo resultados de la peticion en variable productos del este componente. 
    console.log('sasa',this.productos)
      this.loading=false;
    });//fin de subscribe
    
    // falta agregar loading
              
              } //fin de pedirProductos


              
  cut(value){
    var corte = value.slice(8)
   
   return corte
 };

}
