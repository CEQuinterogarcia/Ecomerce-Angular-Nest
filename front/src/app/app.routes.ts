import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { DetailComponent } from './detail/detail.component';


export const routes: Routes = [
   
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'productform', component: ProductFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Ruta por defecto
  { path: '**', redirectTo: '/home' }  // Ruta para manejar páginas no encontradas
  
];

