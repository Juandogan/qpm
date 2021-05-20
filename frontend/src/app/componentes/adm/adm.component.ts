import { Component, OnInit,  } from '@angular/core';
import { CrudService } from '../../servicios/crud.service';
import { Producto } from '../../modelos/producto';
import { LocationStrategy } from '@angular/common';



@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css'],
  providers:[CrudService]

})
export class AdmComponent implements OnInit {

  productos: Producto[]=[];
  public uploadedFiles: Array<File> = [];
  public path : any;
  public loading:boolean = true;
  public loading2:boolean = false;
  public loading3:boolean = false;
  public loading4:boolean = false;
  public loading5:boolean = false;
  public publi2: any ;
  public filtro: any ;
  public value:any;
  public fachaPublicacion =new Date();
  public ocultar=true;
  public ocultar2=true;


tituloShow=false;
subtituloShow=false;
descripcionShow=false;

imagenShow=false;
archivoShow=false;
tituloImagenShow = false;


fuenteShow=false;
autorShow=false;
fechaShow=false;
horaShow=false;
lugarShow=false;
abstractShow=false;


filtro_valor = ''

buscar(value: string){
  this.filtro_valor = value;

};
    constructor(public crudService:CrudService, private location: LocationStrategy) {


    }

    ngOnInit(): void {
      window.scrollTo(0,0);
      this.pedirProductos();


    }

    fnOcultar(){

      this.ocultar2=true
      this.loading3=false
      this.imagenShow=true

    };

    fnOcultar2(){

      this.ocultar=true
      this.loading5=false
      this.archivoShow=true

    };

    pedirProductos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.


      this.crudService.getProductos().subscribe(res =>{
      this.productos = res as Producto[]; // guardo resultados de la peticion en variable productos del este componente.
      console.log(this.productos)

      });//fin de subscribe

      // falta agregar loading

                } //fin de pedirProductos

    agregarPublicacion(){
      this.crudService.unProducto.fecha = String(this.fachaPublicacion)
      if( this.crudService.unProducto._id)
      {
      this.crudService.modificarProducto(this.crudService.unProducto)
      .subscribe(res => {


                           });


    }

      else  {
         this.crudService.unProducto.vistas = 0
         this.crudService.unProducto.fecha = String(this.fachaPublicacion)
           this.crudService.addProducto(this.crudService.unProducto).subscribe(res => { console.log(res) })
    }
    };

     publiForm(publi){
      this.publi2 = publi

        }

    openEditor(value):void{

      this.crudService.unProducto = new Producto
     this.crudService.unProducto.categoria = value;


          switch (value) {

            case 'Nota':
             this.tituloShow=true;
             this.subtituloShow=true;
             this.imagenShow=true;
             this.archivoShow=true;
             this.descripcionShow =true;
             this.autorShow=true;
            this.tituloImagenShow = true;
            this.fechaShow =true
                break;
                case 'Talleres':
                  this.fechaShow =true
                  this.tituloShow=true;
                  this.subtituloShow=true;
                  this.imagenShow=true;
                  this.archivoShow=true;
                  this.descripcionShow =true;
                  this.autorShow=true;
                 this.tituloImagenShow = true;
                     break;

                case 'Institucional':
                  this.fechaShow =true
                  this.tituloShow=true;
                  this.subtituloShow=true;
                  this.imagenShow=true;
                  this.archivoShow=true;
                  this.descripcionShow =true;
                  this.autorShow=true;
                 this.tituloImagenShow = true;
                     break;


                case 'Libros':
                this.tituloShow=true;
                this.subtituloShow=true;
                this.imagenShow=true;
                this.archivoShow=true;
                this.descripcionShow =true;
                this.autorShow=true;
               this.tituloImagenShow = true;
               this.fechaShow =true
                   break;

                   case 'Tienda Virtual':
                   this.tituloShow=true;
                   this.subtituloShow=true;
                   this.imagenShow=true;
                   this.archivoShow=true;
                   this.descripcionShow =true;
                   this.autorShow=true;
                  this.tituloImagenShow = true;
                  this.fechaShow =true
                      break;
                      case 'Portada':
                      this.tituloShow=true;
                      this.subtituloShow=true;
                      this.imagenShow=true;
                      this.archivoShow=true;
                      this.descripcionShow =true;
                      this.autorShow=true;
                     this.tituloImagenShow = true;
                     this.fechaShow =true
                         break;


            default:
                console.log("No such day exists!");
                break;
        }
      }
          editar(producto:Producto){
            this.crudService.unProducto = producto
            this.crudService.unProducto.categoria = producto.categoria
            switch (producto.categoria) {

                 case 'Nota':
                  this.cerrarForm()
                  this.tituloShow=true;
                  this.subtituloShow=true;
                  this.imagenShow=true;
                  this.archivoShow=true;
                  this.descripcionShow =true;
                  this.autorShow=true;
                  this.tituloImagenShow = true;
                  this.fechaShow = true;
                    break;
                    case 'Institucional':
                      this.tituloShow=true;
                      this.subtituloShow=true;
                      this.imagenShow=true;
                      this.archivoShow=true;
                      this.descripcionShow =true;
                      this.autorShow=true;
                     this.tituloImagenShow = true;
                     this.fechaShow =true
                         break;
                         case 'Cultura':
                          this.tituloShow=true;
                          this.subtituloShow=true;
                          this.imagenShow=true;
                          this.archivoShow=true;
                          this.descripcionShow =true;
                          this.autorShow=true;
                         this.tituloImagenShow = true;
                         this.fechaShow =true
                             break;
                         case 'Talleres':
                          this.tituloShow=true;
                          this.subtituloShow=true;
                          this.imagenShow=true;
                          this.archivoShow=true;
                          this.descripcionShow =true;
                          this.autorShow=true;
                         this.tituloImagenShow = true;
                         this.fechaShow =true
                             break;
                 case 'Libros':
                  this.cerrarForm()
                  this.tituloShow=true;
             this.subtituloShow=true;
             this.imagenShow=true;
             this.archivoShow=true;
             this.descripcionShow =true;
             this.autorShow=true;
            this.tituloImagenShow = true;
            this.fechaShow =true
                    break;

                    case 'Portada':
                      this.cerrarForm()
                      this.tituloShow=true;
                 this.subtituloShow=true;
                 this.imagenShow=true;
                 this.archivoShow=true;
                 this.descripcionShow =true;
                 this.autorShow=true;
                this.tituloImagenShow = true;
                this.fechaShow =true
                        break;

              default:
                  console.log("No such day exists!");
                  break;
            }


          // this.crudService.unProducto= producto

             };

            cerrarForm(){


        this.tituloShow=false;
        this.subtituloShow=false;
        this.descripcionShow=false;
        this.imagenShow=false;
        this.archivoShow=false;

        this.fuenteShow=false;
        this.autorShow=false;
        this.fechaShow=false;
        this.horaShow=false;
        this.lugarShow=false;
        this.abstractShow=false;
        this.fechaShow =false

            }

        resetForm(form){
         form.reset()


        };

        onUpload(){
         let formData = new FormData();
          for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

            formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

          }
          this.crudService.uploadFile(formData).subscribe(res => {
            var ass  = String(res);
            this.crudService.unProducto.imagen1 = ass ;

            console.log(ass);
            this.ocultar2 = false
            this.loading2=false;
            this.loading3=true;
          })

        };

        onUpload2(){
          let formData = new FormData();
           for (let i = 0 ; i  < this.uploadedFiles.length; i++ ){

             formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

           }
           this.crudService.uploadFile(formData).subscribe(res => {
             var ass  = String(res);
             this.crudService.unProducto.imagen2 = ass ;

             this.ocultar=false
             this.loading4=false;
             this.loading5=true;
           })

         };

        onFileChange(e){

          this.uploadedFiles = e.target.files;
        };

        borrarProducto(producto){
         console.log(producto._id)
          this.crudService.deleteProducto(producto._id).subscribe(res => console.log(res));



           this.pedirProductos()

      };


  }
