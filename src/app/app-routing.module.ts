import{ProyectoCamisetasComponent} from './proyecto-camisetas/proyecto-camisetas.component'
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProyectoAboutComponent} from './proyecto-about/proyecto-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camisetas',
    pathMatch: 'full'
  },
  {
    path: 'camisetas',
    component: ProyectoCamisetasComponent
  },
  {
    path: 'about',
    component: ProyectoAboutComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
