import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-footer-fecha',
  templateUrl: './footer-fecha.component.html',
  styleUrls: ['./footer-fecha.component.css']
})
export class FooterFechaComponent implements OnInit {
fecha:any;


@Input('data') nota:any;
@Input('color') color:string

  constructor(public crudService:CrudService) { }



  ngOnInit(): void {


    this.fecha = this.crudService.fechaPipe(new Date(this.nota.fecha))
  }

}
