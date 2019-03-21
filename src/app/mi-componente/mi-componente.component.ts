import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  permitido: boolean = true
  tareas: Array<string>=["tarea0","tarea1","tarea2"]
  estado: string= "no se ha agregado ninguna tarea"
  nombreTarea: string =""
  tareaAgregada: boolean = false
  constructor() {
    setTimeout(() => {
      this.permitido = false
    }, 63000);
   }

   agregarTarea(){
    this.estado=`se agregado una tarea
     ${this.nombreTarea}
    `
    this.tareaAgregada=true
    this.tareas.push(this.nombreTarea)
   }

   setearNombreTarea(event: Event){
     this.nombreTarea = (<HTMLInputElement>event.target).value
   }

  ngOnInit() {
  }

}
