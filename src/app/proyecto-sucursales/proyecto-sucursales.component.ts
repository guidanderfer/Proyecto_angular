import { Component, OnInit } from '@angular/core';
import { sucursal } from './sucursal';

@Component({
  selector: 'app-proyecto-sucursales',
  templateUrl: './proyecto-sucursales.component.html',
  styleUrls: ['./proyecto-sucursales.component.scss']
})
export class ProyectoSucursalesComponent implements OnInit {
  sucursales: sucursal[] = [
    {
      "pais": "Argentina",
      "ciudad": "Tandil",
      "email": "sucursaltandil@gmail.com"
    },
    {
      "pais": "Argentina",
      "ciudad": "Mar del Plata",
      "email": "sucursalmardel@gmail.com" 
    },
    {
      "pais": "Argentina",
      "ciudad": "Buenos Aires",
      "email": "sucursalbuenosaires@gmail.com"    
    },
    {
      "pais": "Argentina",
      "ciudad": "La Plata",
      "email": "sucursallaplata@gmail.com"     
    },
    {
      "pais": "Uruguay",
      "ciudad": "Montevideo",
      "email": "sucursalmontevideo@gmail.com"
    },
    {
      "pais": "Brasil",
      "ciudad": "Rio de Janeiro",
      "email": "sucursaltandil@gmail.com"
    },
    {
      "pais": "Chile",
      "ciudad": "Santiago de Chile",
      "email": "sucursalsantiago@gmail.com"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
