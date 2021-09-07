import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listaLibros:Libro[]=[];
  constructor() { 
    this.listaLibros=[new Libro("1","Java","Pedro"),new Libro("2","Python","Pepe"),new Libro("3","php","Ana")];

  }

  public buscarTodos():Libro[]{
    return this.listaLibros;
  }

  public insertarLibro(libro:Libro){
    
    this.listaLibros.push(libro);
  }

  public borrarLibro(libro:Libro){
    let libroBorrar= this.listaLibros.filter(function(elem){
      return elem.isbn==libro.isbn;
    })[0];

    let posicion = this.listaLibros.indexOf(libroBorrar);

    this.listaLibros.splice(posicion,1);
  }

  public detalleLibro(libro:Libro):Libro{
    let miLibro:Libro= this.listaLibros.filter(function(elem){
      return elem.isbn==libro.isbn;
    })[0];
    return miLibro;
  }

}
