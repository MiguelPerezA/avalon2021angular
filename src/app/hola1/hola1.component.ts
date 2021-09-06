import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre:string="Miguel"

  constructor() { }

  ngOnInit(): void {
  }

}
