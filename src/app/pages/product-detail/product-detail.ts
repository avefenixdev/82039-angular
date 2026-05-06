import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../../services/productos';
import { FormatearPrecio } from '../../services/formatear-precio';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  private route = inject(ActivatedRoute)
  productId!: string

  product = signal<any>({})

  constructor(public productoService: Productos, private formatearPrecioService: FormatearPrecio) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!
    console.log(this.productId)

    this.productoService.getProductosById(this.productId).subscribe(
      {
        next: data => {
          //console.log(data)
          this.product.set(data)
        },
        error: err => {
          console.error('Error al cargar productos', err)
        }
      }
    )

  }

  formatear(precio: number) {
    return this.formatearPrecioService.formatear(precio)
  }

}
