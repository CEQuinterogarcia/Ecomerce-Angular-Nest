import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 product = [
    {
        "name": "Smartphone X200",
        "brand": "TechCorp",
        "release_date": "2024-05-10",
        "features": {
            "screen_size": "6.5 inches",
            "battery_life": "24 hours",
            "camera": "108 MP",
            "processor": "Octa-core 3.1 GHz"
        },
        "price": "799.99"
    },
    {
        "name": "Laptop Pro 15",
        "brand": "ComputeX",
        "release_date": "2024-03-22",
        "features": {
            "screen_size": "15.6 inches",
            "battery_life": "10 hours",
            "processor": "Intel i7 12th Gen",
            "ram": "16 GB",
            "storage": "1 TB SSD"
        },
        "price": "1299.99"
    },
    {
        "name": "Smartwatch A1",
        "brand": "WearTech",
        "release_date": "2024-04-15",
        "features": {
            "screen_size": "1.8 inches",
            "battery_life": "48 hours",
            "water_resistance": "50 meters",
            "compatibility": "iOS and Android"
        },
        "price": "199.99"
    },
    {
        "name": "Wireless Earbuds Z",
        "brand": "SoundWave",
        "release_date": "2024-06-01",
        "features": {
            "battery_life": "8 hours",
            "charging_case": "24 hours",
            "noise_cancellation": "Active",
            "connectivity": "Bluetooth 5.2"
        },
        "price": "149.99"
    },
    {
        "name": "4K Ultra HD TV",
        "brand": "VisionMax",
        "release_date": "2024-02-10",
        "features": {
            "screen_size": "55 inches",
            "resolution": "3840 x 2160",
            "smart_tv": "Yes",
            "hdmi_ports": "4"
        },
        "price": "999.99"
    }
]
}
