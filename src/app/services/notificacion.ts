import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class Notificacion {

  confirmacion(
    titulo: string, 
    texto: string = '¿Estás seguro?', 
    btnConfirmText: string = 'Sí', 
    btnCancelText: string = 'Cancelar'
  ) {
    return Swal.fire({
          title: titulo,
          text: texto,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: btnConfirmText,
          cancelButtonText: btnCancelText
    })
  }

  exito(
    titulo: string, 
    texto: string = ''
  ) {
    return Swal.fire({
          title: titulo,
          text: texto,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
    })
  }

  error(
    titulo: string, 
    texto: string = '', 
  ) {
    return Swal.fire({
          title: titulo,
          text: texto,
          icon: "error",
          showConfirmButton: false
    })
  }

}
