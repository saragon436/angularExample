import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-tarea',
  templateUrl: './app-tarea.component.html',
  styleUrls: ['./app-tarea.component.css']
})
export class AppTareaComponent implements OnInit {
  estadoTarea:string =""

  constructor() {
    this.estadoTarea=Math.random()>.5 ? "En proceso" : "Cerrada"
   }

   colorEstado(){
     return this.estadoTarea==="En proceso" ? 'yellow' : 'grey'
   }

  ngOnInit() {
  }

}
