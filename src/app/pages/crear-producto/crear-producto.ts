import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Productos } from '../../services/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  imports: [ ReactiveFormsModule ],
  templateUrl: './crear-producto.html',
  styleUrl: './crear-producto.css',
})
export class CrearProducto {

  private fb = inject(FormBuilder)
  form = this.fb.group({
    nombre: '',
    categoria: '',
    precio: '',
    stock: ''
  })

  constructor(public productoService: Productos, private router: Router) {}

/*   constructor(private formb: FormBuilder) {
    this.form = formb.group({
        nombre: '',
        categoria: '',
        precio: ''
      })
  } */

  enviar() {
    console.log(this.form.value)
    if (this.form.invalid) return
    
    this.productoService.crearProducto(this.form.value) // Me devuelve un observable
      .subscribe({
        next: () => {
          this.router.navigate(['/productos-async'])
        },
        error: err => {
          console.log('Error al crear producto', err)
        }
      })
  }

 

}
