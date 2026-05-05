import { Component, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-template-driven.html',
  styleUrl: './form-template-driven.css',
})
export class FormTemplateDriven {
  submitted = signal(false)
  formValue = signal(null)

  form = signal({
    name: '',
    email: ''
  })

  onSubmit(form: NgForm) {
    console.log('Se envío...')
    console.log(form)
    console.log(form.value)
    this.formValue.set(form.value)
    this.submitted.set(true)
    form.resetForm()
    // pristine (el input no fue manipulado)
    // dirty (el input si fue manipulado)
    // valid (basado en las validaciones me va a decir si es válido)
    // invalid (basado en las validaciones me va a decir si no es válido)
  }

  mostrarData(nombreCtrl: NgModel) {
    console.log(nombreCtrl)
  }
}
