import { Component } from '@angular/core';
import { FormTemplateDriven } from "../../features/form-template-driven/form-template-driven";
import { FormReactiveForms } from "../../features/form-reactive-forms/form-reactive-forms";

@Component({
  selector: 'app-formularios',
  imports: [FormTemplateDriven, FormReactiveForms],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
})
export class Formularios {}
