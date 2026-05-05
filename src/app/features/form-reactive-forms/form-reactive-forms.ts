import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Decorador -> Decora una clase (O sea le entrega todas las caracteristica a esa clase que poseen los compomentes) | Decorador ->  Herencia dinamica.

@Component({
  selector: 'app-form-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './form-reactive-forms.html',
  styleUrl: './form-reactive-forms.css',
})
export class FormReactiveForms {

  readonly sizeMinNombre = 3
  readonly sizeMaxNombre = 15

  // ! Reactive Forms
  /* El formulario vive dentro del Typescript no en el HTML */
  /* Todo cambio que ocurra pasa por observable y reaccionables */
  /* El estado es explicito, predecible y controlable */
  /* https://angular.dev/guide/forms/reactive-forms */
  // ! Resumiendo
  /* Se basa en un modelo de programación reactiva para crear y gestionar el componente. Se escribe dentro del código Typescript */

 /*  form!: FormGroup

  constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        nombre: '',
        correo: '',
        edad: '',
        pais: '',
        biografia: ''
       })
  } */

  /* inyecta dependencias de Angular que nos permiten obtener una dependencia sin usar el constructor */

  // Signal para estado envío
  enviado = signal(false)

  private fb = inject(FormBuilder)
  /* Los datos */
  form = this.fb.group({
        nombre: [
          '', /* valor inicial */
          [
            Validators.required,
            Validators.minLength(this.sizeMinNombre),
            Validators.maxLength(this.sizeMaxNombre),
            this.sinespacios
          ] /* Validaciones */
        ],
        correo: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
        edad: '',
        pais: [
          '', /* valor inicial */
          Validators.required  /* Validación */
        ],
        biografia: ''
  })

  enviarRf() {
    console.log('Se está enviando la info...')


    if ( this.form.invalid ) {
      this.form.markAllAsTouched()
      return
    }
    console.log(this.form.value) // En value están los datos del formulario
    console.log(this.form) // En value están los datos del formulario

    this.enviado.set(true)
    this.form.reset()
  }
  // Validación personalizada
  sinespacios(control: any) {
    return control.value?.includes(' ') ? { sinespacios: 'No se permiten espacios' } : null;
  }

  /* GETTERS */
  get nombre() {
    return this.form.get('nombre')
  }

  get correo() {
    return this.form.get('correo')
  }

}

