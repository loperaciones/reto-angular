import { Component } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios.interface';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styles: [
  ]
})
export class BarraComponent {

  usuario : Usuarios = 
    {nombre: 'Stephany', foto: 'foto_model.png'};


}
