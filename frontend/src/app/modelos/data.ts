export class data {

    constructor(_id ='', nombre='' , descripcion='', imagen='', precio='', color1='', color2='',color3='',color4='', cantidad = 0, categoria="", descripcion2="", precio2='', nombre2='', paisCosto="", pais='', 
talle='', color=''){
        
        this.talle = talle;
        this.color=color;
        this.nombre = nombre;
        this.nombre2 = nombre2;
        this._id =_id;
        this.descripcion = descripcion;
        this.descripcion2 = descripcion2;
        this.imagen = imagen;
        this.precio = precio;
        this.precio2 = precio2;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.paisCosto = paisCosto;
        this.pais = pais
    }
    _id: string;
    nombre: string;
    nombre2: string;
    descripcion: string;
    descripcion2: string;
    imagen: string;
    precio: string;
    precio2: string;
    color1: string;
    color2:string;
    color3:string;
    color4:string;
    cantidad: number;
    talle:string;
    color:string;
    categoria: string;
    paisCosto: string;
    pais:string;
}



