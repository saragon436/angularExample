import { Component, OnInit } from '@angular/core';
import {iTarea} from "src/app/modelos/Tarea";

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  // permitido: boolean = true
  // tareas: Array<string>=["tarea0","tarea1","tarea2"]
  // estado: string= "no se ha agregado ninguna tarea"
  // nombreTarea: string =""
  // tareaAgregada: boolean = false
  tareas: Array<iTarea> = []
  constructor() {
    // setTimeout(() => {
    //   this.permitido = false
    // }, 63000);
    this.tareas.push({titulo:"tarea 1",fechaRegistro:new Date()})
    this.tareas.push({titulo:"tarea 2",fechaRegistro:new Date()})
    this.tareas.push({titulo:"tarea 3",fechaRegistro:new Date()})
   }

  //  agregarTarea(){
  //   this.estado=`se agregado una tarea
  //    ${this.nombreTarea}
  //   `
  //   this.tareaAgregada=tru
  //   this.tareas.push(this.nombreTarea)
  //  }

  //  setearNombreTarea(event: Event){
  //    this.nombreTarea = (<HTMLInputElement>event.target).value
  //  }

  ngOnInit() {
  }

}
