import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo-c2',
  templateUrl: './hijo-c2.component.html',
  styleUrls: ['./hijo-c2.component.css']
})
export class HijoC2Component implements OnInit {
  @Input()
  mensajeExterno:string="";
  @Output() eventoMensaje:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje(){
    //console.log("Se va a enviar mensaje")
    this.eventoMensaje.emit("Hola desde el hijo a C2");
  }
}
