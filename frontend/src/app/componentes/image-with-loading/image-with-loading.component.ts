import { Component, Input } from '@angular/core';
import { CrudService } from '../../servicios/crud.service';

@Component({
  selector: 'app-image-with-loading',
  templateUrl: './image-with-loading.component.html',
  styleUrls: ['./image-with-loading.component.css']
})
export class ImageWithLoadingComponent {

  @Input() loader:string='../../../assets/loading.gif';
  @Input() height:string="200";
  @Input() width:string="200";
  @Input() image:string;
  @Input() border:string;

  isLoading:boolean;
  
  constructor(private crudService:CrudService) { 
    this.crudService.loading=true
    this.isLoading=true;
  }

  hideLoader(){
    
    this.isLoading=true;
    this.crudService.loading=false;
  }

}
