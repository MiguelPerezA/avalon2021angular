import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola2',
  templateUrl: './hola2.component.html',
  styleUrls: ['./hola2.component.css']
})
export class Hola2Component implements OnInit {

  listaImagenes:string[]=["img1.jpg","img2.jpg","img3.jpg"];
  paisaje:string="";
  contador:number=0;


  constructor() {  }

  //Cuando ya está cargado
  ngOnInit(): void {
    this.paisaje="assets/"+this.listaImagenes[this.contador];
  }

  avanza(){
    /*if(this.contador<this.listaImagenes.length-1){
      this.contador++;
      this.paisaje="assets/"+this.listaImagenes[this.contador];
    }*/
    this.contador++;
    if(this.contador>this.listaImagenes.length-1)this.contador=0
    this.paisaje="assets/"+this.listaImagenes[this.contador];
    
  }

  retrocede(){
    /*if(this.contador>0){
      this.contador--;
      this.paisaje="assets/"+this.listaImagenes[this.contador];
    }*/
    this.contador--;
    if(this.contador<0)this.contador=this.listaImagenes.length-1;
    this.paisaje="assets/"+this.listaImagenes[this.contador];
    
  }

}
