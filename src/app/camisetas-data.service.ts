import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { camiseta } from './camisetas-list/camiseta';

const URL = 'https://62bcde626b1401736c01d1a6.mockapi.io/api/articulos';

@Injectable({
  providedIn: 'root'
})
export class CamisetasDataService {

  constructor(private http: HttpClient) { }

  public trae_todos(): Observable<camiseta[]>{
    return this.http.get<camiseta[]>(URL)
                .pipe(
                  tap((camisetas: camiseta[]) => camisetas.forEach(camiseta => camiseta.cantidad = 0))
                
                );
  }
}
