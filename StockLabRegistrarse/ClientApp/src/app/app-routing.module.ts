import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonaRegistroComponent } from './Stocklabre/docente-registro/docente-registro.component';

const routes: Routes = [
  
  {
    path: 'personaRegistro',
    component: PersonaRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
