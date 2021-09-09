import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';
import { map, mergeMap } from "rxjs/operators";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hola8',
  templateUrl: './hola8.component.html',
  styleUrls: ['./hola8.component.css']
})
export class Hola8Component implements OnInit {

  listaLibros:Libro[]=[];
  libroNuevo:Libro={} as Libro;
  //libroNuevo:Libro | undefined;
  //libroNuevo!:Libro;
  libroSeleccionado:Libro={} as Libro;
  libroEdit:Libro={} as Libro;
  
  filtroTitulo:string="";
  //Se generan eventos de teclado cada vez que se pulsa una tecla
  teclaPulsada=new Subject<KeyboardEvent>();

  constructor(public servicio:LibrosRestService) { 

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

  //Cambio por Observables
  /*
  borrarLibro(libro:Libro):void{
    //Codigo antiguo
    this.servicio.borrarLibro(libro).then(()=>{
      this.servicio.buscarTodos().then((libros)=>{
        this.listaLibros=libros;
      });
    });
    
   //Código más simplificado
    this.servicio.borrarLibro(libro)
    .then(()=>this.servicio.buscarTodos())
    .then((libros)=>{
      this.listaLibros=libros;
    });
    
  }*/
  //Metodo para observables
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

  insertarLibro(){
    this.servicio.insertarLibro(this.libroNuevo)
    .pipe(mergeMap((e)=>this.servicio.buscarTodos()))
    .subscribe((libros)=>{
      this.listaLibros=libros;
      this.libroNuevo={} as Libro;
    });
  }

  detalleLibro(libro:Libro):void{
  
    this.servicio.detalleLibro(libro).subscribe((libroD)=>{
      this.libroSeleccionado =libroD;
    });

  }

  cargarEditLibro(libro:Libro){
    //this.libroEdit=libro;
    this.libroEdit={...libro};
  }

  editarLibro(){
    this.servicio.editarLibro(this.libroEdit)
    .pipe(mergeMap((e)=>this.servicio.buscarTodos()))
    .subscribe((libros)=>{
      this.listaLibros=libros;
      this.libroEdit={} as Libro;
    });
  }

}

