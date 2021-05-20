import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrox1'
})
export class Filtrox1Pipe implements PipeTransform {


  transform(value:any[]=[]){
    var pasaje =  value
    var indice = value.length
    var indice1 = indice - 3
    
return   pasaje.slice(indice1, indice).reverse()




}

}
