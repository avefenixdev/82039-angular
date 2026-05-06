import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatearPrecio {

  formatear(precio: number) {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    })

    return formatter.format(precio)
  }
}
