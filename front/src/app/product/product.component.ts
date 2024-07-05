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
        id: 1,
        name: "Laptop Gamer Asus ROG Strix Scar",
        description: "Laptop para juegos con gráficos de alta definición, 16GB de RAM, 1TB de almacenamiento SSD y procesador de última generación.",
        price: 2500.00,
        stock: 15,
        image: "https://resources.claroshop.com/medios-plazavip/s2/10252/1145258/5d13a10bac9b0-laptop-gamer-asus-rog-strix-scar-ii-i7-16gb-512gb-rtx-2070-1600x1600.jpg?scale=500&qlty=75",
        category: 'Electronics'
      };
      
       product2 = {
        id: 2,
        name: "Redmi Note 13 Pro",
        description: "Smartphone con pantalla OLED de 6.5 pulgadas, cámara de 48MP, 128GB de almacenamiento y batería de larga duración.",
        price: 800.00,
        stock: 30,
        category: 'Computers',
        image: "https://i.gadgets360cdn.com/large/Redmi_Note_13_Pro_plus_xiaomi_1694767582456.jpg?downsize=950:*",
        
      };
      
       product3 = {
        name: "Tablet Lenovo Tab M10 FHD Plus",
        description: "Tablet de 10 pulgadas con 64GB de almacenamiento, ideal para trabajo y entretenimiento.",
        price: 300.00,
        stock: 20,
        category: 'Audio',
        image: "https://i5.walmartimages.com/asr/70b6357e-4c4a-49d5-89e6-98afb7864ac5.011e97d0826acd0c6a6f0d099b532105.jpeg",
        
      };
      
       product4 = {
        name: "Monitor 4K GHI",
        description: "Monitor 4K de 27 pulgadas con tiempo de respuesta de 1ms, ideal para diseño gráfico y juegos.",
        price: 600.00,
        stock: 10,
        category: 'Cameras',
        image: "https://cdn.mwave.com.au/images/400/qsm_q35cfb120wqhd_35_120hz_uwqhd_hdr_frameless_curved_va_gaming_monitor_ac49057.jpg",
       
      };
      
       product5 = {
        name: "JBL AURICULARES BLUETOOTH MOD. BT500",
        description: "Auriculares Bluetooth con cancelación de ruido y hasta 20 horas de duración de la batería.",
        price: 150.00,
        stock: 50,
        category: 'Phones',
        image: "https://tvguru.co.ke/wp-content/uploads/2021/10/JBL-Tune-500BT-Powerful-Bass-Wireless-Headphones.jpg",
        
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