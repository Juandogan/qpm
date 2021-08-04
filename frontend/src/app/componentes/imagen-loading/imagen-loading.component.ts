import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-loading',
  templateUrl: './imagen-loading.component.html',
  styleUrls: ['./imagen-loading.component.css']
})
export class ImagenLoadingComponent {

  @Input() loader:string='';
  @Input() height:number=100;
  @Input() width:number=100;
  @Input() image:string='';

  isLoading:boolean;
  imagenEstado=false;

  constructor() {
    this.isLoading=true;
  }

  hideLoader(){
    this.isLoading=false;
    this.imagenEstado = true;
  }

}
