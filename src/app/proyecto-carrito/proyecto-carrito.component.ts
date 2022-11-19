import { Component, OnInit } from '@angular/core';
import { carrito } from './carritos';

@Component({
  selector: 'app-proyecto-carrito',
  templateUrl: './proyecto-carrito.component.html',
  styleUrls: ['./proyecto-carrito.component.scss']
})
export class ProyectoCarritoComponent implements OnInit {
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
