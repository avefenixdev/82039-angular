import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Contador {

  private _contador = signal(22)

  contador = this._contador.asReadonly()

  incrementar() {
    this._contador.update(valor => valor + 1)
  }

  decrementar() {
    this._contador.update(valor => valor - 1)
  }


}
