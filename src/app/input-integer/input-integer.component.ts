import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { camiseta } from '../camisetas-list/camiseta';
@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {
  esnumero: boolean | undefined;
  error: boolean | undefined;

  constructor() { }
  @Input()
  cantidad!: number;

  @Input()
  maximo!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maximoalcanzado: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }

  disminuir_cantidad(): void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
   
  }

  aumentar_cantidad(): void{

    if(this.cantidad < this.maximo){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);

    }
    else
      this.maximoalcanzado.emit("Se alcanzo el maximo, no hay mas stock de este producto");
    
  }

  cambiar_cantidad(event: KeyboardEvent){
    if (isNaN(Number(event.key))) {
      this.esnumero = false;
      this.error = false;
      
    } else {
      this.esnumero = true;
      if (Number(event.key) > this.maximo) {
        this.error = true;
        
      } else {
        this.cantidad = Number(event.key);
        this.cantidadChange.emit(this.cantidad);
      }
    }
  }
  

}
