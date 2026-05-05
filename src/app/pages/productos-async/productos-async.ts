import { Component, signal } from '@angular/core';
import { Productos } from '../../services/productos';
import { Tabla } from '../../shared/components/tabla/tabla'

@Component({
  selector: 'app-productos-async',
  imports: [Tabla],
  templateUrl: './productos-async.html',
  styleUrl: './productos-async.css',
})
export class ProductosAsync {

  products = signal<any[]>([])
  // https://rxjs.dev/guide/operators
  // Inyección de dependencias -> herencia dinamica.
  constructor(public productoService: Productos) {
    this.cargarProductos()
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(
      {
        next: data => {
          //console.log(data)
          this.products.set(data)
        },
        error: err => {
          console.error('Error al cargar productos', err)
        }
      }
    )
  }

  formatear(precio: number) {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    })

    return formatter.format(precio)
  }
}
