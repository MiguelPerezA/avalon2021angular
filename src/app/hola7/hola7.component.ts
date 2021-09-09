import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-hola7',
  templateUrl: './hola7.component.html',
  styleUrls: ['./hola7.component.css']
})
export class Hola7Component implements OnInit {
  
  libroNuevo:Libro={} as Libro;
  libroSeleccionado:Libro={} as Libro;
  //Ahora se carga desde LibrosService
  listaLibros:Libro[]=[];
 /* constructor() {
    this.listaLibros=[new Libro("1","Java","Pedro"),new Libro("2","Python","Pepe"),new Libro("3","php","Ana")];

   }*/
   //Se declara propiedad a nivel interno llamada servicio
   //Siendo una instancia de LibroService
   constructor(public servicio:LibrosService){

   }

  ngOnInit(): void {
    this.listaLibros=this.servicio.buscarTodos();
  }
  //Metodos Botones Antiguos...
  insertar(){
    //this.listaLibros.push(this.libroNuevo);
    //Se clona objeto libroNuevo de forma rápida con JScript
    this.listaLibros.push({...this.libroNuevo});
    this.libroNuevo={} as Libro;
  }

  borrar(isbn:string):void{
   let libroBorrar= this.listaLibros.filter(function(elem){
      return elem.isbn==isbn;
    })[0];

    let posicion = this.listaLibros.indexOf(libroBorrar);

    this.listaLibros.splice(posicion,1);


  }

  detalle(isbn:string){
    this.libroSeleccionado = this.listaLibros.filter(function(elem){
      return elem.isbn==isbn;
    })[0];
  }
  //FIN de Metodos Antiguos

  insertarLibro(){
    //Se clona objeto libroNuevo de forma rápida con JScript
    this.servicio.insertarLibro({...this.libroNuevo});
    this.libroNuevo={} as Libro;
  }

  borrarLibro(libro:Libro):void{
    
    this.servicio.borrarLibro(libro);
 
  }

  detalleLibro(libro:Libro):void{
  
    this.libroSeleccionado = this.servicio.detalleLibro(libro);

  }
  
  

}
