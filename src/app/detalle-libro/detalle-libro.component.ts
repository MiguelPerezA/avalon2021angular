import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, subscribeOn } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {
  
  libroSeleccionado:Libro={} as Libro;
  constructor(private servicio:LibrosRestService,private route:ActivatedRoute,private location:Location ) { }

  ngOnInit(): void {
    /*this.route.paramMap.subscribe((parametros) => {
      let isbn = parametros.get("isbn");
      if (isbn != null)
        this.servicio.detalleMiLibro(isbn).subscribe((libro) => {

          this.libroSeleccionado = libro;

        })

    });
    */
   //Forma con una sola subscripcion y no 2, 
   //para que sea más óptimo
    this.route.paramMap.pipe(map((parametros)=>{
      return parametros.get("isbn");
    })).pipe(mergeMap((parametro:string|null)=>{
      if (parametro!=null) {
        return this.servicio.detalleMiLibro(parametro);
      } else {
        return new Observable<Libro>();
      }

    })).subscribe((parametro:Libro)=>{
      this.libroSeleccionado = parametro;
    });

  }

  volver(){
    this.location.back();
  }

}
