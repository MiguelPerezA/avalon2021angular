import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  mensaje="Hola soy c2"
  mensajeHijo="Hola para hijo desde c2"
  constructor() { }

  ngOnInit(): void {
  }
  /* mensajeAlerta(){
    alert("Hola");
  } */
  mensajeAlerta(evento:any){
    alert(evento)
  }

}
