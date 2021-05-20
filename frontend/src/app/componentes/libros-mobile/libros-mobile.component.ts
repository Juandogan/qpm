import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

 
@Component({
  selector: 'app-libros-mobile',
  templateUrl: './libros-mobile.component.html',
  styleUrls: ['./libros-mobile.component.css']
})
export class LibrosMobileComponent implements OnInit {
  @Input('data') nota:any;

  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
  }

}
