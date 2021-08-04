import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrox4'
})
export class Filtrox4Pipe implements PipeTransform {


  transform(value:any[]=[]){
    var pasaje =  value
    var indice = value.length
    var indice1 = indice - 3

return   pasaje.slice(indice1, indice).reverse()






}

}
