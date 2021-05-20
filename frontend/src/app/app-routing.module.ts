import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import{ PrincipalComponent } from '../app/componentes/principal/principal.component'
import{ AdmComponent } from '../app/componentes/adm/adm.component'
import { LibrosComponent } from '../app/componentes/libros/libros.component' 
import { ArticuloComponent } from '../app/componentes/articulo/articulo.component'
import { ResolveNotaService } from './servicios/resolve-nota.service';
import { ResolveLateralService } from './servicios/resolve-lateral.service';
import { OliverioComponent } from './componentes/oliverio/oliverio.component';

const routes: Routes = [
  {path:'', component:  PrincipalComponent },
  {path:'principal', component:  PrincipalComponent },
  {path:'adm', component:  AdmComponent },
  {path:'libros', component: LibrosComponent},
  {path:'articulo/:_id', component: ArticuloComponent, resolve: {data: ResolveNotaService, dataLateral: ResolveLateralService}},
  {path:'oliverio', component: OliverioComponent, resolve: {data: ResolveNotaService }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
