import { Component, OnInit } from '@angular/core';
import { CamisetasDataService } from '../camisetas-data.service';
import { CamisetascarritoService } from '../camisetascarrito.service';
import { camiseta } from './camiseta';

@Component({
  selector: 'app-camisetas-list',
  templateUrl: './camisetas-list.component.html',
  styleUrls: ['./camisetas-list.component.scss']
})
export class CamisetasListComponent implements OnInit {

  camisetas: camiseta[] = [];
  

  constructor(
    private carrito: CamisetascarritoService,
    private camisetasDataService: CamisetasDataService ) {
    
   }

  ngOnInit(): void {
    this.camisetasDataService.trae_todos()
    .subscribe(camisetas => this.camisetas = camisetas);
  }

  agregar_alcarrito(camiseta: camiseta): void{
    this.carrito.agregar_alcarrito(camiseta);
    camiseta.stock -= camiseta.cantidad;
    camiseta.cantidad = 0;
  }

  maximoalcanzado(mensaje: string){
    alert(mensaje);
  }
  minimoalcanzado(mensaje: string){
    alert(mensaje);
  }
}
