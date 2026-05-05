import { Component, signal } from '@angular/core';
import { products } from '../../../constants/producto';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-listado-productos',
  imports: [RouterLink],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {
  productos = signal(products)
}
