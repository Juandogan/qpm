import { Component, HostListener, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
color:string='rgb(255, 255, 255, 100);'
  constructor(public crudService:CrudService) { }

clima:any

  ngOnInit(): void {


    this.clima =  localStorage.getItem('clima')
    this.clima = JSON.parse(this.clima)
    console.log('as',this.clima)
  }

}
