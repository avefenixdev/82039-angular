import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Una única instancia para toda la aplicación. Patrón de diseño Singleton
})
export class Productos {

  private apiURL = environment.apiUrl

  constructor(private http: HttpClient) {}

  // ! Cuando yo trabajo con HttpClient lo que devuelve son observables.
  /* CRUD -> R:READ -> GET */
  getProductos() {
    return this.http.get<any[]>(this.apiURL) // Me devuelve, retonar un observable
  }
  /* CRUD -> C:CREATE -> POST */
  crearProducto(producto: any) {
    return this.http.post<any>(this.apiURL, producto) // Me devuelve, retonar un observable
  }

  actualizarProducto(id: string, producto: any) {
    return this.http.put<any>(`${this.apiURL}/${id}`, producto) // Me devuelve, retonar un observable
  }

  eliminarProducto(id: string) {
    return this.http.delete<any>(`${this.apiURL}${id}`) // Me devuelve, retonar un observable
  }

  // El servicio no ejecuta
  // Solo devuelve observables
  // ------------------------------
  // ---RXJS-----------------------
  // Peticiones HTTP
  // Eventos de DOM (click, input, scroll)
  // WebSockets
  // Timers (setTimeout o setInterval)
  // https://rxjs.dev/
  // https://rxjs.dev/guide/operators

}
