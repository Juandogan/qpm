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

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    console.log('bandera',this.nota)
        // this.fecha = this.crudService.fechaPipe(new Date(this.nota.fecha))
        // this.urlImage = "http://192.168.43.55:3000/upload/" + this.cut(this.nota.imagen1)
        
  }
  


  cut(value:string){
    var corte = value.slice(8)
  
   return corte
 };
}
