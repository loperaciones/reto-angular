import { Component, OnInit } from '@angular/core';
import { Carreras } from '../interfaces/usuarios.interface';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styles: [
    `.carreras{
      height: auto;
      margin-top: 25%;
      margin-left: 5%;
    }
    button{
      margin-left: 10px;
    },
    .contenedor{
      margin-top: 8%;
      margin-left: 7%;
    }`
  ]
})
export class ContenedorComponent implements OnInit {

  carrera: Carreras[] = [{
      nombre: 'Ingeniería de Sistemas',
      tipo: 'Universitaria',
      sede: 'Barranquilla y Cúcuta',
      clase: 'Combinada (Presencial y virtual)'
    },
    {
      nombre: 'Ingeniería Industrial',
      tipo: 'Universitaria',
      sede: 'Barranquilla y Cúcuta',
      clase: 'Combinada (Presencial y virtual)'
    },
    {
      nombre: 'Ingeniería de Mercados',
      tipo: 'Universitaria',
      sede: 'Barranquilla y Cúcuta',
      clase: 'Combinada (Presencial y virtual)'
    },
    {
      nombre: 'Arquitectura',
      tipo: 'Universitaria',
      sede: 'Barranquilla y Cúcuta',
      clase: 'Combinada (Presencial y virtual)'
    },
    {
      nombre: 'Derecho',
      tipo: 'Universitaria',
      sede: 'Barranquilla y Cúcuta',
      clase: 'Combinada (Presencial y virtual)'
    },          
    {
      nombre: 'Medicia',
      tipo: 'Universitaria',
      sede: 'Barranquilla y Cúcuta',
      clase: 'Combinada (Presencial y virtual)'
    },     
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
