import { Component } from '@angular/core';
import { Contador } from '../../services/contador';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

  // ! ¿Para qué sirven los servicios?

  // Sirven para compartir lógica entre varios componentes
  // Compartir el estado (signals)
  // Separar responsabilidad (Vista & lógica)
  // Escalabilidad

  constructor(public contadorService: Contador) {}

}
