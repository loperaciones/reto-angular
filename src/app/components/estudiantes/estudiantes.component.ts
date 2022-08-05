import { Component, OnInit } from '@angular/core';
import { Estudiantes } from '../interfaces/usuarios.interface';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styles: [
  ]
})
export class EstudiantesComponent implements OnInit {

  estudiante: Estudiantes[] =[
    {nombre:'ADRIANA CAROLINA HERNANDEZ MONTERROZA', foto:'mujer_1.jpg', edad:23, titulo:'Ingeniería de sistemas', grado:2018, sede:'Barranquilla', telefono:'300 589 6347'},
    {nombre:'ADRIANA MARCELA REY SANCHEZ', foto:'mujer_2.jpg', edad:35, titulo:'Contaduria', grado:2012, sede:'Barranquilla', telefono:'314 589 7841'},
    {nombre:'ALEJANDRO ABONDANO ACEVEDO', foto:'hombre_1.jpg', edad:28, titulo:'Medicina', grado:2020, sede:'Cúcuta', telefono:'315 859 2245'},
    {nombre:'ALEXANDER CARVAJAL VARGAS', foto:'hombre_2.jpg', edad:30, titulo:'Ingeniería industrial', grado:2012, sede:'Barranquilla', telefono:'301 235 6987'},
    {nombre:'ANDREA CATALINA ACERO CARO', foto:'mujer_3.jpg', edad:42, titulo:'Ingeniería de mercados', grado:2009, sede:'Cúcuta', telefono:'312 478 9654'},
    {nombre:'ANDREA LILIANA CRUZ GARCIA', foto:'mujer_4.jpg', edad:37, titulo:'Arquitectura', grado:2006, sede:'Barranquilla', telefono:'300 258 7436'}    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
