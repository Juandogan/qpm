import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CrudService } from './crud.service';


@Injectable({
  providedIn: 'root'
})
export class ResolveLateralService implements Resolve<any> {
  constructor(private crudService:CrudService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    
      return this.crudService.getProductos();

       
  }
}
