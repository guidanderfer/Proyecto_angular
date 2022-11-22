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
      "email": "sucursaltandil@gmail.com",
      "telefono": 1254632
    },
    {
      "pais": "Argentina",
      "ciudad": "Mar del Plata",
      "email": "sucursalmardel@gmail.com",
      "telefono": 1214674
    },
    {
      "pais": "Argentina",
      "ciudad": "Buenos Aires",
      "email": "sucursalbuenosaires@gmail.com",
      "telefono": 1222576
    },
    {
      "pais": "Argentina",
      "ciudad": "La Plata",
      "email": "sucursallaplata@gmail.com",
      "telefono": 1254887
    },
    {
      "pais": "Uruguay",
      "ciudad": "Montevideo",
      "email": "sucursalmontevideo@gmail.com",
      "telefono": 2254622
    },
    {
      "pais": "Brasil",
      "ciudad": "Rio de Janeiro",
      "email": "sucursaltandil@gmail.com",
      "telefono": 3254749
    },
    {
      "pais": "Chile",
      "ciudad": "Santiago de Chile",
      "email": "sucursalsantiago@gmail.com",
      "telefono": 4256831
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
