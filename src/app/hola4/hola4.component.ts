import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola4',
  templateUrl: './hola4.component.html',
  styleUrls: ['./hola4.component.css']
})
export class Hola4Component implements OnInit {

  mostrar:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarItem(){
    this.mostrar=true;
  }
  ocultarItem(){
    this.mostrar=false;
  }

}
