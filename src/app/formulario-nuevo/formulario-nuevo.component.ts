import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-nuevo',
  templateUrl: './formulario-nuevo.component.html',
  styleUrls: ['./formulario-nuevo.component.css']
})
export class FormularioNuevoComponent implements OnInit {

  listaLibros:Libro[]=[];
  libroNuevo:Libro={} as Libro;

  constructor(private servicio:LibrosRestService,private route:Router,private location:Location) { }

  ngOnInit(): void {
  }

  insertarLibro(){
    /*this.servicio.insertarLibro(this.libroNuevo)
    .pipe(mergeMap((e)=>this.servicio.buscarTodos()))
    .subscribe((libros)=>{
      this.listaLibros=libros;
      this.libroNuevo={} as Libro;
    });*/
    this.servicio.insertarLibro(this.libroNuevo)
    .subscribe(()=>{
      //this.route.navigate(['/listalibros']);
      this.route.navigate(['listalibros']);
    });

  }

  volver(){
    this.location.back();
  }

}
