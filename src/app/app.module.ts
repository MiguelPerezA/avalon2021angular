import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hola1Component } from './hola1/hola1.component';
import { Hola2Component } from './hola2/hola2.component';
import { Hola3Component } from './hola3/hola3.component';
import { Hola4Component } from './hola4/hola4.component';
import { Hola5Component } from './hola5/hola5.component';
import { Hola6Component } from './hola6/hola6.component';
import { Hola7Component } from './hola7/hola7.component';
import { Hola8Component } from './hola8/hola8.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    Hola1Component,
    Hola2Component,
    Hola3Component,
    Hola4Component,
    Hola5Component,
    Hola6Component,
    Hola7Component,
    Hola8Component,
    ListaLibrosComponent,
    FormularioNuevoComponent,
    DetalleLibroComponent,
    EditarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
