import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIconModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'High-Quality wireless headphones with noise cancelallation and premium sound.',
      price: 199.99,
      originalPrice: 249.99
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this advanced smartwatch featuring heart rate.',
      price: 299.99
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact speaker with powerfull bass and 12-hour battery life.',
      price: 79.99
    }
  ]);

}
