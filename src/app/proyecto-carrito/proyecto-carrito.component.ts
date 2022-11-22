import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { camiseta } from '../camisetas-list/camiseta';
import { CamisetascarritoService } from '../camisetascarrito.service';
import { carrito } from './carritos';

@Component({
  selector: 'app-proyecto-carrito',
  templateUrl: './proyecto-carrito.component.html',
  styleUrls: ['./proyecto-carrito.component.scss']
})
export class ProyectoCarritoComponent implements OnInit {
  lista_compras$: Observable<camiseta[]>;

  constructor(private carrito: CamisetascarritoService) { 
    this.lista_compras$ = carrito.lista_compras.asObservable();
  }

  ngOnInit(): void {
    
  }

}
