import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto';

@Component({
  selector: 'app-oliverio',
  templateUrl: './oliverio.component.html',
  styleUrls: ['./oliverio.component.css']
})
export class OliverioComponent implements OnInit {

  nota:any;
  producto:Producto;

  urlImage:string;

  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {

    

  this.ruta.data.subscribe((data)=>{this.nota = data.data; console.log(this.nota);
    this.urlImage = "http://192.168.43.55:3000/upload/" + this.cut(this.nota.imagen1)
  }) 


  window.scrollTo(0,0);

  }

  cut(value){
    var corte = value.slice(8) 
    
   return corte
 };
}
