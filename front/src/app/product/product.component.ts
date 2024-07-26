import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductcardComponent } from '../productcard/productcard.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductcardComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {
      name: "Laptop Gamer Asus ROG Strix Scar",
      description: "Laptop para juegos con gráficos de alta definición, 16GB de RAM, 1TB de almacenamiento SSD y procesador de última generación.",
      price: 2500.00,
      stock: 15,
      image: "https://resources.claroshop.com/medios-plazavip/s2/10252/1145258/5d13a10bac9b0-laptop-gamer-asus-rog-strix-scar-ii-i7-16gb-512gb-rtx-2070-1600x1600.jpg?scale=500&qlty=75",
      category: 'Electronics'
    },
    {
      name: "Redmi Note 13 Pro",
      description: "Smartphone con pantalla OLED de 6.5 pulgadas, cámara de 48MP, 128GB de almacenamiento y batería de larga duración.",
      price: 800.00,
      stock: 30,
      category: 'Computers',
      image: "https://i.gadgets360cdn.com/large/Redmi_Note_13_Pro_plus_xiaomi_1694767582456.jpg?downsize=950:*",
    },
    {
      name: "Tablet Lenovo Tab M10 FHD Plus",
      description: "Tablet de 10 pulgadas con 64GB de almacenamiento, ideal para trabajo y entretenimiento.",
      price: 300.00,
      stock: 20,
      category: 'Audio',
      image: "https://i5.walmartimages.com/asr/70b6357e-4c4a-49d5-89e6-98afb7864ac5.011e97d0826acd0c6a6f0d099b532105.jpeg",
    },
    {
      name: "Monitor 4K GHI",
      description: "Monitor 4K de 27 pulgadas con tiempo de respuesta de 1ms, ideal para diseño gráfico y juegos.",
      price: 600.00,
      stock: 10,
      category: 'Cameras',
      image: "https://cdn.mwave.com.au/images/400/qsm_q35cfb120wqhd_35_120hz_uwqhd_hdr_frameless_curved_va_gaming_monitor_ac49057.jpg",
    },
    {
      name: "JBL AURICULARES BLUETOOTH MOD. BT500",
      description: "Auriculares Bluetooth con cancelación de ruido y hasta 20 horas de duración de la batería.",
      price: 150.00,
      stock: 50,
      category: 'Phones',
      image: "https://tvguru.co.ke/wp-content/uploads/2021/10/JBL-Tune-500BT-Powerful-Bass-Wireless-Headphones.jpg",
    },
    {
      name: "Smartwatch Apple Watch Series 6",
      description: "Smartwatch con pantalla Retina, monitoreo de oxígeno en sangre, y GPS integrado.",
      price: 400.00,
      stock: 25,
      category: 'Wearables',
      image: "https://quieromac.com/cdn/shop/files/AppleWatchSerie6Azul_1.jpg?v=1707511059",
    },
    {
      name: "Cámara Canon EOS Rebel T7",
      description: "Cámara DSLR con sensor de 24.1 megapíxeles, pantalla LCD de 3 pulgadas y conectividad Wi-Fi.",
      price: 500.00,
      stock: 8,
      category: 'Cameras',
      image: "https://m.media-amazon.com/images/I/71EWRyqzw0L.jpg",
    },
    {
      name: "PlayStation 5",
      description: "Consola de videojuegos de última generación con SSD ultrarrápido, gráficos 4K y controladores DualSense.",
      price: 499.99,
      stock: 40,
      category: 'Gaming',
      image: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
    },
    {
      name: "Amazon Echo Dot 4th Gen",
      description: "Altavoz inteligente con Alexa, diseño compacto y sonido mejorado.",
      price: 50.00,
      stock: 60,
      category: 'Home',
      image: "https://images-na.ssl-images-amazon.com/images/I/71jiGaztijL._AC_SL1000_.jpg",
    },
    {
      name: "Bicicleta Eléctrica Xiaomi Mi",
      description: "Bicicleta eléctrica con motor de 250W, autonomía de 45 km y sistema de plegado rápido.",
      price: 1200.00,
      stock: 5,
      category: 'Outdoor',
      image: "https://http2.mlstatic.com/D_Q_NP_772455-MLU70815600812_082023-O.webp",
    },
    {
      name: "Audífonos Bose QuietComfort 35 II",
      description: "Audífonos inalámbricos con cancelación de ruido y hasta 20 horas de batería.",
      price: 299.00,
      stock: 35,
      category: 'Audio',
      image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/images/qc35_ii_product_page_hotspot_silo_1x1.psd/jcr:content/renditions/cq5dam.web.320.320.jpeg",
    }
  ];
  getProducts(): Observable<any[]> {
    return of(this.products);
  }

}
    //  product1 = {
    //     id: 1,
    //     name: "Laptop Gamer Asus ROG Strix Scar",
    //     description: "Laptop para juegos con gráficos de alta definición, 16GB de RAM, 1TB de almacenamiento SSD y procesador de última generación.",
    //     price: 2500.00,
    //     stock: 15,
    //     image: "https://resources.claroshop.com/medios-plazavip/s2/10252/1145258/5d13a10bac9b0-laptop-gamer-asus-rog-strix-scar-ii-i7-16gb-512gb-rtx-2070-1600x1600.jpg?scale=500&qlty=75",
    //     category: 'Electronics'
    //   };
      
    //    product2 = {
    //     id: 2,
    //     name: "Redmi Note 13 Pro",
    //     description: "Smartphone con pantalla OLED de 6.5 pulgadas, cámara de 48MP, 128GB de almacenamiento y batería de larga duración.",
    //     price: 800.00,
    //     stock: 30,
    //     category: 'Computers',
    //     image: "https://i.gadgets360cdn.com/large/Redmi_Note_13_Pro_plus_xiaomi_1694767582456.jpg?downsize=950:*",
        
    //   };
      
    //    product3 = {
    //     name: "Tablet Lenovo Tab M10 FHD Plus",
    //     description: "Tablet de 10 pulgadas con 64GB de almacenamiento, ideal para trabajo y entretenimiento.",
    //     price: 300.00,
    //     stock: 20,
    //     category: 'Audio',
    //     image: "https://i5.walmartimages.com/asr/70b6357e-4c4a-49d5-89e6-98afb7864ac5.011e97d0826acd0c6a6f0d099b532105.jpeg",
        
    //   };
      
    //    product4 = {
    //     name: "Monitor 4K GHI",
    //     description: "Monitor 4K de 27 pulgadas con tiempo de respuesta de 1ms, ideal para diseño gráfico y juegos.",
    //     price: 600.00,
    //     stock: 10,
    //     category: 'Cameras',
    //     image: "https://cdn.mwave.com.au/images/400/qsm_q35cfb120wqhd_35_120hz_uwqhd_hdr_frameless_curved_va_gaming_monitor_ac49057.jpg",
       
    //   };
      
    //    product5 = {
    //     name: "JBL AURICULARES BLUETOOTH MOD. BT500",
    //     description: "Auriculares Bluetooth con cancelación de ruido y hasta 20 horas de duración de la batería.",
    //     price: 150.00,
    //     stock: 50,
    //     category: 'Phones',
    //     image: "https://tvguru.co.ke/wp-content/uploads/2021/10/JBL-Tune-500BT-Powerful-Bass-Wireless-Headphones.jpg",
        
    //   };
      
    //    product6 = {
    //     name: 'Smart TV LG OLED55CXPUA',
    //     description: 'Televisor inteligente OLED de 55 pulgadas con resolución 4K y compatibilidad con HDR.',
    //     price: 1500,
    //     stock: 6,
    //     image: 'https://cdn.shopify.com/s/files/1/0029/6838/7619/products/lg-oled55cxpua_1024x1024.jpg?v=1604568996',
    //     category: 'Televisions'
    //   };
    // }