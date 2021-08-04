import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {


  transform(value:any[]=[], arg:any): any {


    if(arg ==='' || arg.length < 0 ) return value;

    var resultPost:any[]=[];
    var todo:string;

    for(const categoria of value){

      var todo:string = categoria.categoria + categoria.titulo;

        if(todo.indexOf(arg) >-1 ){

          resultPost.push(categoria);

    };

  };
  return resultPost.reverse();


}


}
