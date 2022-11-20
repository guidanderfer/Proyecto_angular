import { Component, OnInit } from '@angular/core';
import { CamisetascarritoService } from '../camisetascarrito.service';
import { camiseta } from './camiseta';

@Component({
  selector: 'app-camisetas-list',
  templateUrl: './camisetas-list.component.html',
  styleUrls: ['./camisetas-list.component.scss']
})
export class CamisetasListComponent implements OnInit {

  camisetas: camiseta[] = [
    {
      "nombre": "Camiseta Barcelona",
      "imagen": "assets/img/barcelona.jpg",
      "talle": "XL",
      "precio": 10000,
      "stock": 3,
      "clearance": false,
      "cantidad": 0,
    },
    {
      "nombre": "Camiseta Boca",
      "imagen": "assets/img/boca.jpg",
      "talle": "L",
      "precio": 9000,
      "stock": 0,
      "clearance": true,
      "cantidad": 0,

    },
    {
      "nombre": "Camiseta PSG",
      "imagen": "assets/img/psg.jpg",
      "talle": "M",
      "precio": 10500,
      "stock": 4,
      "clearance": false,
      "cantidad": 0,
    },
    {
      "nombre": "Camiseta Manchester City",
      "imagen": "assets/img/mancity.jpg",
      "talle": "XL",
      "precio": 10300,
      "stock": 5,
      "clearance": false,
      "cantidad": 0,
    },
  

  ]
  ;
  

  constructor(private carrito: CamisetascarritoService) {
    
   }

  ngOnInit(): void {
  }

  agregar_alcarrito(camiseta: camiseta): void{
    this.carrito.agregar_alcarrito(camiseta);
    camiseta.stock -= camiseta.cantidad;
    camiseta.cantidad = 0;
  }

  maxReached(mensaje: string){
    alert(mensaje);
  }

  
}
