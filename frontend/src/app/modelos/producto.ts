export class Producto {

    constructor(_id ='', fecha ='', titulo='', tituloImagen='', subtitulo='', descripcion='', imagen1='', imagen2='',imagen3='',imagen4='', imagen5='',imagen6='', likes=0,categoria='', vistas=0,hash='' ){

this._id = _id;
this.fecha = fecha
this.titulo = titulo
this.subtitulo = subtitulo
this.descripcion = descripcion
this.imagen1 = imagen1
this.imagen2 = imagen2
this.imagen3 = imagen3
this.imagen4 = imagen4
this.imagen5 = imagen5
this.imagen6 = imagen6
this.categoria = categoria
this.vistas = vistas
this.imagen3 =imagen3
this.likes = likes
this.tituloImagen = tituloImagen
this.hash = hash

    }
    _id: string
    fecha:string;

    titulo:string;
    subtitulo:string;
    hash:string;
    descripcion:string;
    imagen1:string;
    imagen2:string;
    imagen3:string;
    imagen4:string;
    imagen5:string;
    imagen6:string;

    categoria:string;
    likes:number;
    vistas:number;
    tituloImagen:string;
}



