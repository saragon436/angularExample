import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { FormsModule } from '@angular/forms';
import { AppTareaComponent } from './app-tarea/app-tarea.component'

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    AppTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
