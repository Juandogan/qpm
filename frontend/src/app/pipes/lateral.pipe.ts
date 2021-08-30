import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lateral'
})
export class LateralPipe implements PipeTransform {




  transform(value:any[]=[],): any {


    var resultPost:any[]=[];
    var todo:string;



  value.sort(function() { return Math.random() - 0.5 });
  console.log(value)


  return value



}
}
