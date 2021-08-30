import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/producto';
import { Location } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as moment from 'moment'
import { of } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  readonly URL_API  = "https://www.quepasamiramar.com.ar/productos";
  readonly URL_API2  = "https://www.quepasamiramar.com.ar/upload";
  readonly URL_API3  = "https://www.quepasamiramar.com.ar/pais";

  scroll:any;
  productos:Producto[]=[];
  unProducto:Producto
  loading=true;
  scrolled :boolean = false;
  scrollObserver$ = of(1)
  constructor(private http:HttpClient,  private location:Location, private snackBar: MatSnackBar) {

    this.unProducto = new Producto();


  }

  getPais() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API3);

  };

  cancel():void {
    this.location.back(); // <-- go back to previous location on cancel
    }


    uploadFile(formData){
      return this.http.post(this.URL_API2, formData)   // en produccion poner '/upload' por this.URL_API2

    }


  getProductos() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API);

  };

   getOneCard(_id){
    return this.http.get(this.URL_API + `/${_id}`);
  };

  addProducto(productos:Producto) {
    this.snack('holasa')
    return this.http.post(this.URL_API, productos);


  };

  modificarProducto(productos:Producto) {
    return this.http.put(this.URL_API + `/${productos._id}` , productos);

  };

  deleteProducto(_id:string) {
    return this.http.delete(this.URL_API + `/${_id}`);

  };

  cut(value){
    var corte = value.slice(8)

   return corte
 };

 fechaPipe(value:Date){

  let requerido = moment(value);
  let creacion = moment();
  let dias = creacion.diff(requerido,'minutes');


if( dias > 59){
  let requerido = moment(value);
  let creacion = moment();
  let dias = creacion.diff(requerido,'hours');

    if( dias > 24){
          let requerido = moment(value);
        let creacion = moment();
        let dias = creacion.diff(requerido,'days');

      return dias + 'd'
 }

  return dias + 'h'
 }


return dias +'m'
}


snack(value:any){
   this.snackBar.open(value,'',{duration:1000, horizontalPosition:'center', verticalPosition:'bottom',   panelClass: ['blue-snackbar']})
 }
 };




  // uploadFile(formData){
  //   return this.http.post(this.URL_API2, formData)
  //   // se deja solo '/upload' en produccion

  // }


// snack(value){
//   this.snackBar.open(value,'',{duration:1000, horizontalPosition:'center', verticalPosition:'top',   panelClass: ['blue-snackbar']})
// }

//FIN DE CLASE GENERAL
