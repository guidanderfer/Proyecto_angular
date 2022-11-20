import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { camiseta } from '../app/camisetas-list/camiseta';

@Injectable({
  providedIn: 'root'
})
export class CamisetascarritoService {

  private _lista_compras: camiseta[] = [];
  lista_compras: BehaviorSubject<camiseta[]> = new BehaviorSubject(this._lista_compras);

  constructor() { }


  agregar_alcarrito(camiseta: camiseta) {
    let item: camiseta | undefined = this._lista_compras.find((valor1) => valor1.nombre == camiseta.nombre);
    if (!item) {
      this._lista_compras.push({ ... camiseta});

    } else {
      item.cantidad == camiseta.cantidad;
    }
    
    console.log(this._lista_compras);
    this.lista_compras.next(this._lista_compras);

    
  }

  
}
