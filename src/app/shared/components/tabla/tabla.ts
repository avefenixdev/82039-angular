import { Component, Input, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Productos } from '../../../services/productos';
import { Notificacion } from '../../../services/notificacion';

@Component({
  selector: 'app-tabla',
  imports: [ RouterLink ],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla {
  
  constructor(private productoService: Productos, private notificacionService: Notificacion) {}

  @Input({ required: true }) products!: Signal<any[]> 

  eliminarById( id:string ) {

    this.notificacionService.confirmacion(
        '¿Eliminar producto?', 
        'Está acción no se puede deshacer')
          .then((result) => {
            if (result.isConfirmed) {

              // Borro el producto vía petición
              this.productoService.eliminarProducto(id)
                .subscribe({
                  next: () => {
                     // Luego muestro el cartel
                      this.notificacionService.exito("Producto eliminado")
                  },
                  error: err => {
                    //console.error('Error al eliminar producto', err)
                    this.notificacionService.error('Error', 'No se pudo eliminar')
                  }
                })
      }
    });

  }

}
