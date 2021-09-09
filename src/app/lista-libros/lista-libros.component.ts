import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  listaLibros:Libro[]=[];
  filtroTitulo:string="";
  //Se generan eventos de teclado cada vez que se pulsa una tecla
  teclaPulsada=new Subject<KeyboardEvent>();


  constructor(private servicio:LibrosRestService,private router:Router) { 

    this.teclaPulsada.pipe(map((event:any)=> {

      return event.target.value;

    })).pipe(mergeMap((texto:string)=>{
      return this.servicio.buscarPorTitulo(texto);
    })).subscribe((libros)=> {

          //console.log(libros);
          this.listaLibros=libros;
    });

  }

  ngOnInit(): void {
    this.servicio.buscarTodos().subscribe((libros)=>{
      this.listaLibros=libros;
    });
  }

  borrarLibro(libro:Libro):void{
    //Se encadenan observables
    this.servicio.borrarLibro(libro)
    //Se realiza Transformación
    .pipe(mergeMap((e)=>this.servicio.buscarTodos()))
    //Se hace subscripcion para que se ejecute la llamada
    .subscribe((libros)=>{
      this.listaLibros=libros;
    });

  }

  insertar(){
    this.router.navigate(["formularionuevo"]);
  }

  detalle(libro:Libro){
    this.router.navigate(["detalle",libro.isbn]);
  }

  cargarEditLibro(libro:Libro){
    this.router.navigate(["editar",libro.isbn]);
  }

}
