import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  libroEdit:Libro={} as Libro;
  constructor(private servicio:LibrosRestService,private route:ActivatedRoute, private router:Router,private location:Location) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(map((parametros)=>{
      return parametros.get("isbn");
    })).pipe(mergeMap((parametro:string|null)=>{
      if (parametro!=null) {
        return this.servicio.detalleMiLibro(parametro);
      } else {
        return new Observable<Libro>();
      }
      
    })).subscribe((parametro:Libro)=>{
      this.libroEdit = parametro;
    });
  }

  editarLibro(){
    this.servicio.editarLibro(this.libroEdit).subscribe(()=>{
      this.router.navigate(["listalibros"]);
    });
  }

  volver(){
    this.location.back();
  }

}
