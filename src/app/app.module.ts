import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamisetasListComponent } from './camisetas-list/camisetas-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProyectoAboutComponent } from './proyecto-about/proyecto-about.component';
import { ProyectoCamisetasComponent } from './proyecto-camisetas/proyecto-camisetas.component';
import { ProyectoCarritoComponent } from './proyecto-carrito/proyecto-carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { TablaTallesComponent } from './tabla-talles/tabla-talles.component';
import { ProyectoSucursalesComponent } from './proyecto-sucursales/proyecto-sucursales.component';


@NgModule({
  declarations: [
    AppComponent,
    CamisetasListComponent,
    ProyectoAboutComponent,
    ProyectoCamisetasComponent,
    ProyectoCarritoComponent,
    InputIntegerComponent,
    TablaTallesComponent,
    ProyectoSucursalesComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
