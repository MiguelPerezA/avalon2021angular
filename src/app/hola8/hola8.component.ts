import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-hola8',
  templateUrl: './hola8.component.html',
  styleUrls: ['./hola8.component.css']
})
export class Hola8Component implements OnInit {

  listaLibros:Libro[]=[];
  constructor(public servicio:LibrosRestService) { }

  ngOnInit(): void {
    this.servicio.buscarTodos().then((libros)=>{
      this.listaLibros=libros;
    }).catch(function(e){
      console.log(e);
    });
  }

  borrarLibro(libro:Libro):void{
    
    this.servicio.borrarLibro(libro);
 
  }

}
