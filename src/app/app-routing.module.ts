import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearActaComponent } from './crear-acta/crear-acta.component';
import { VistaActaComponent } from './vista-acta/vista-acta.component';

const routes: Routes = [
  {path: 'creacion',component: CrearActaComponent},
  {path: 'visualizacion', component: VistaActaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
export const routingComponents = [CrearActaComponent,VistaActaComponent]
