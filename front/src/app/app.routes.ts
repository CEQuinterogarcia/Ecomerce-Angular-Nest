import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';


export const routes: Routes = [
   
  { path: 'home', component: HomeComponent },
  { path: 'productform', component: ProductFormComponent }
];
