import { Component } from '@angular/core';
import { Contador } from '../../services/contador';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  constructor(public contadorService: Contador) {}

}
