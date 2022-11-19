import { Component, OnInit } from '@angular/core';
import { carrito } from './carrito';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.scss']
})
export class CarritoListComponent implements OnInit {

  productos: carrito [] = [
    {
      "nombre": "Camiseta Barcelona",
      "imagen": "assets/img/barcelona.jpg",
      "talle": "XL",
      "precio": 10000,
      "cantidad": 1,
      
    },
  

  ] 
  
  constructor() { }

  ngOnInit(): void {
  }

}
