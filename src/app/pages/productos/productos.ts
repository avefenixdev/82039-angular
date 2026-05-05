import { Component } from '@angular/core';
import { ListadoProductos } from "../../features/listado-productos/listado-productos";

@Component({
  selector: 'app-productos',
  imports: [ListadoProductos],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {}
