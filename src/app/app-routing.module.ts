import{ProyectoCamisetasComponent} from './proyecto-camisetas/proyecto-camisetas.component'
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProyectoAboutComponent} from './proyecto-about/proyecto-about.component';
import { ProyectoSucursalesComponent } from './proyecto-sucursales/proyecto-sucursales.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'camisetas',
    component: ProyectoCamisetasComponent
  },
  {
    path: 'inicio',
    component: ProyectoAboutComponent
  },
  {
    path: 'sucursales',
    component: ProyectoSucursalesComponent
  },
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
