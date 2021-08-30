import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CrudService } from '../../servicios/crud.service'
import { Producto } from '../../modelos/producto';
import { timer, Subject,  } from 'rxjs';
import { ClimaService } from 'src/app/servicios/clima.service';
import { CKEditorModule } from 'ckeditor4-angular';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, OnDestroy{
    public clientes$ = new Subject<number>();
   clientes:number

   productos:any
    loading=true;
    public urlImage:string
    fecha:any;
    centered = false;
    disabled = false;
    unbounded = false;
    testLoading = true;
    radius: 50;
    color: string ='rgba(133, 133, 133, 0.432)';
    scrollPosition: any
    pedidoLocal:string;
    scroll:number;

  constructor(public crudService:CrudService, public climaService:ClimaService ) {

   }

  //  @HostListener("scroll", ['$event'])



  async ngOnInit(){

    window.scrollTo(0,0)
    this.crudService.scrolled = false

    const tiempo  =  timer(2000)
    tiempo.subscribe((n)=> {this.testLoading=false;
    var az = Number(localStorage.getItem('pedidos'))

     window.scrollTo(0,az);
     this.clientes$.subscribe(data => {
     this.scroll = Number(data)
     if(this.scroll > 120 ){this.crudService.scrolled = false}
   });


})

    this.crudService.loading=true;



    this.pedirProductos()
    this.urlImage = "http://192.168.43.55:3000/upload/1TImwNkxf3C-4G8naHkKhreJ.jpg";
  }

  ngOnDestroy(){

    var aux = window.pageYOffset
    localStorage.setItem('pedidos', JSON.stringify(aux));
   }

evento($event)
{
  if ( window.pageYOffset > 110) {
    this.crudService.scrolled = true;}
    else {this.crudService.scrolled =false}




  };


  pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
    this.crudService.getProductos().subscribe(res =>{
    //this.crudService.productos = res as Producto[];  // guardo resultados de la peticion en el servicio
    this.productos = res as Producto[]; // guardo resultados de la peticion en variable productos del este componente.

      // this.crudService.loading=false;
    });//fin de subscribe

    // falta agregar loading

              } //fin de pedirProductos


  cut(value){
    var corte = value.slice(8)

   return corte
 };

}
