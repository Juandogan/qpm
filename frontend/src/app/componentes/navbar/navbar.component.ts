import { Component, HostListener, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  color:string=''

  constructor(public crudService:CrudService) {

  this.color='rgb(55, 55, 55);'

   }

clima:any

  ngOnInit(): void {


    this.clima =  localStorage.getItem('clima')
    this.clima = JSON.parse(this.clima)
    console.log('as',this.clima)
  }

}
