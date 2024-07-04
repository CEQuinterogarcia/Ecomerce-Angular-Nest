import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ProductFormService } from './product-form.service';
import { provideHttpClient } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'] // Corregido a styleUrls
})
export class ProductFormComponent {
  productForm: FormGroup;
  produc: any;

  constructor(private fb: FormBuilder, private productService: ProductFormService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(1)]],
      categoryId: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.produc = this.productForm.value;
      console.log(this.productForm.value);
      this.productService.createProduct(this.produc).subscribe(
        response => {
          console.log('Producto creado exitosamente', response);
        },
        error => {
          console.log('Error al crear el producto', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}