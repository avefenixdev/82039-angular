import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { ProductosDetalle } from './features/productos-detalle/productos-detalle';
import { Formularios } from './pages/formularios/formularios';
import { ProductosAsync } from './pages/productos-async/productos-async';
import { CrearProducto } from './pages/crear-producto/crear-producto';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: Productos },
  { path: 'productos-async', component: ProductosAsync },
  { path: 'nosotros', component: Nosotros },
  { path: 'productos/crear', component: CrearProducto },
  { path: 'productos/:id', component: ProductDetail },
  { path: 'productos-detalle/:id', component: ProductosDetalle },
  { path: 'formularios', component: Formularios },
  { path: 'contacto', component: Contacto },
  /* { path: '**', component: NoEncontrado }, */
  { path: '**', redirectTo: '' }
];


