import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola5',
  templateUrl: './hola5.component.html',
  styleUrls: ['./hola5.component.css']
})
export class Hola5Component implements OnInit {

  nombre:string="";
  constructor() { }

  ngOnInit(): void {
  }

  pulsar(){
    this.nombre="juan";
  }

}
