import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPrincipal'
})
export class FiltroPrincipalPipe implements PipeTransform {


  transform(value:any[]=[]){
    var pasaje =  value
    
return   pasaje.reverse()




}

}
