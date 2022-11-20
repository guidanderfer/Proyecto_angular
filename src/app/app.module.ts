import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamisetasListComponent } from './camisetas-list/camisetas-list.component';
//import { CarritoListComponent } from './carrito-list/carrito-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProyectoAboutComponent } from './proyecto-about/proyecto-about.component';
import { ProyectoCamisetasComponent } from './proyecto-camisetas/proyecto-camisetas.component';
import { ProyectoCarritoComponent } from './proyecto-carrito/proyecto-carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    CamisetasListComponent,
    //CarritoListComponent,
    ProyectoAboutComponent,
    ProyectoCamisetasComponent,
    ProyectoCarritoComponent,
    InputIntegerComponent
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
