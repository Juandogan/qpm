import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';

//NGX-bootstrap
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

//MATERIAL
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatBadgeModule} from '@angular/material/badge';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { FooterComponent } from './componentes/footer/footer.component';


import { CrudService } from '../app/servicios/crud.service';
import { AdmComponent } from './componentes/adm/adm.component';
import { Filtrox1Pipe } from './pipes/filtrox1.pipe';
import { LibrosComponent } from './componentes/libros/libros.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PortadaComponent } from './componentes/portada/portada.component';
import { BajoportadaComponent } from './componentes/bajoportada/bajoportada.component';
import { LoadingImageComponent } from './componentes/loading-image/loading-image.component';
import { LoadigImage2Component } from './componentes/loadig-image2/loadig-image2.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { LateralComponent } from './componentes/lateral/lateral.component';
import { Filtrox4Pipe } from './pipes/filtrox4.pipe';
import { BajoPortadaMobileComponent } from './componentes/bajo-portada-mobile/bajo-portada-mobile.component';
import { ImageWithLoadingComponent } from './componentes/image-with-loading/image-with-loading.component';
import { LibrosMobileComponent} from './componentes/libros-mobile/libros-mobile.component';
import { BajoPortadaDesktopComponent } from './componentes/bajo-portada-desktop/bajo-portada-desktop.component'
import { ResolveNotaService } from './servicios/resolve-nota.service';
import { ResolveLateralService } from './servicios/resolve-lateral.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { OliverioComponent } from './componentes/oliverio/oliverio.component';
import { ModalComponent } from './componentes/modal/modal.component';
import {MatRippleModule} from '@angular/material/core';
import { PlayerComponent } from './componentes/player/player.component';
import { ClimaComponent } from './componentes/clima/clima.component';
import { LoadingImageLateralComponent } from './componentes/loading-image-lateral/loading-image-lateral.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    FooterComponent,
    AdmComponent,
    Filtrox1Pipe,
    LibrosComponent,
    FiltroPipe,
    PortadaComponent,
    BajoportadaComponent,
    LoadingImageComponent,
    LoadigImage2Component,
    ArticuloComponent,
    LateralComponent,
    Filtrox4Pipe,
    BajoPortadaMobileComponent,
    ImageWithLoadingComponent,
    LibrosMobileComponent,
    BajoPortadaDesktopComponent,
    TruncatePipe,
    OliverioComponent,
    ModalComponent,
    PlayerComponent,
    ClimaComponent,
    LoadingImageLateralComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatBadgeModule,
    MatRippleModule,
    CKEditorModule

  ],
  providers: [CrudService, ResolveNotaService, ResolveLateralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
