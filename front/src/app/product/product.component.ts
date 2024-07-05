import { Component } from '@angular/core';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductcardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
     product1 = {
        name: 'Impresora Samsung',
        description: 'Impresora 3D con alta precisión y compatibilidad con varios tipos de filamento.',
        price: 700,
        stock: 5,
        image: 'https://cdn.shopify.com/s/files/1/0029/6838/7619/products/71keLzRdw3L._SL1500_1024x1024.jpg?v=1604568996',
        category: 'Electronics'
      };
      
       product2 = {
        name: 'Laptop Dell XPS 13',
        description: 'Ultrabook de alto rendimiento con pantalla InfinityEdge y procesador Intel Core i7.',
        price: 1200,
        stock: 8,
        image: 'https://cdn.shopify.com/s/files/1/0029/6838/7619/products/71keLzRdw3L._SL1500_1024x1024.jpg?v=1604568996',
        category: 'Computers'
      };
      
       product3 = {
        name: 'Auriculares Bose QC35',
        description: 'Auriculares inalámbricos con cancelación de ruido y batería de larga duración.',
        price: 300,
        stock: 15,
        image: 'https://cdn.shopify.com/s/files/1/0029/6838/7619/products/71keLzRdw3L._SL1500_1024x1024.jpg?v=1604568996',
        category: 'Audio'
      };
      
       product4 = {
        name: 'Cámara Canon EOS R',
        description: 'Cámara sin espejo con sensor full-frame y capacidad de grabación 4K.',
        price: 1800,
        stock: 4,
        image: 'https://cdn.shopify.com/s/files/1/0029/6838/7619/products/canon-eos-r_1024x1024.jpg?v=1604568996',
        category: 'Cameras'
      };
      
       product5 = {
        name: 'Smartphone Samsung Galaxy S21',
        description: 'Teléfono inteligente con pantalla AMOLED de 6.2 pulgadas y cámara de 64 MP.',
        price: 999,
        stock: 10,
        image: 'https://cdn.shopify.com/s/files/1/0029/6838/7619/products/samsung-galaxy-s21_1024x1024.jpg?v=1604568996',
        category: 'Phones'
      };
      
       product6 = {
        name: 'Smart TV LG OLED55CXPUA',
        description: 'Televisor inteligente OLED de 55 pulgadas con resolución 4K y compatibilidad con HDR.',
        price: 1500,
        stock: 6,
        image: 'https://cdn.shopify.com/s/files/1/0029/6838/7619/products/lg-oled55cxpua_1024x1024.jpg?v=1604568996',
        category: 'Televisions'
      };
    }