import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola3',
  templateUrl: './hola3.component.html',
  styleUrls: ['./hola3.component.css']
})
export class Hola3Component implements OnInit {

listaLibros:Libro[]=[];


  constructor() { 

    this.listaLibros=[new Libro("1","Java","Pedro"),new Libro("2","Python","Pepe"),new Libro("3","php","Ana")];

  }

  ngOnInit(): void {
  }

}
