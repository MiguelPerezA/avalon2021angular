import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre:string="Miguel";
  contador:number=0;
  libro:Libro;
  paisaje_var:string;
 
  constructor() {
    this.libro=new Libro("1","Java","Pedro")
    this.paisaje_var="assets/img1.jpg";

   }

  ngOnInit(): void {
  }

  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }

}
