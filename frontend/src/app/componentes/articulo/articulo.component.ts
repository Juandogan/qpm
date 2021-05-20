import { Component, OnInit, HostListener } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { CrudService } from '../../servicios/crud.service';
import { Producto } from '../../modelos/producto';




@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  public nota: Producto;
  public loading:boolean = true;
  public urlImage: string;
  public urlImage2:string;
  public productos:any[];
  public fecha:any

  constructor(private ruta:ActivatedRoute, public crudService:CrudService,private location: Location)
    {
    // this.nota = new Producto();
    // this.ruta.params.subscribe(params=>{params['_id'];
    // this.crudService.getOneCard(params['_id'])
    // .subscribe(res=> {this.nota = res as Producto; this.loading =false ;
    //  this.urlImage = "http://192.168.43.55:3000/upload/" + this.cut(this.nota.imagen1)
    // this.crudService.loading = false});})
this.crudService.scrolled = false
     };

     @HostListener("scroll", ['$event'])

  ngOnInit(): void {

    window.scrollTo(0,0);

  this.ruta.data.subscribe((data)=>{this.nota = data.data; console.log(this.nota)})
  this.urlImage = "http://192.168.43.55:3000/upload/" + this.cut(this.nota.imagen1)
  this.urlImage2 = "http://192.168.43.55:3000/upload/" + this.cut(this.nota.imagen2)
  this.fecha = this.crudService.fechaPipe(new Date(this.nota.fecha))
  this.ruta.data.subscribe((data)=>{this.productos = data.dataLateral, console.log('qqq',data.dataLateral)})




  };
  // pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
  //   this.crudService.loading = true
  //   this.crudService.getProductos().subscribe(res =>{
  //   this.crudService.productos = res as Producto[];  // guardo resultados de la peticion en variable productos del este componente.

  //   this.crudService.loading = false

  //   });//fin de subscribe

  //   this.crudService.loading=false;

  //             } //fin de pedirProductos

  cut(value){
     var corte = value.slice(8)

    return corte
  };


evento($event)
{
  if ( window.pageYOffset > 310) {
    this.crudService.scrolled = true;}
    else {this.crudService.scrolled =false}

}

  cancel() {

    this.location.back(); // <-- go back to previous location on cancel

    }

   saltos(data){
    return data.split("\n").join("<br />")


   };

}
