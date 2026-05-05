import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-detalle',
  imports: [],
  templateUrl: './productos-detalle.html',
  styleUrl: './productos-detalle.css',
})
export class ProductosDetalle {

  private route = inject(ActivatedRoute)

  /* userId = computed(() => */
    /* TODO: REVISAR */
    /* this.route.paramMap.get('id') */
  /* ) */
}
