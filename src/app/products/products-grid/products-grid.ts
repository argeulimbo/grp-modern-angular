import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard,
            MatIconModule,
            MatInputModule,
            MatButtonModule,
            FormsModule,
            MatFormFieldModule
          ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'High-Quality wireless headphones with noise cancelallation and premium sound',
      price: 199.99,
      originalPrice: 249.99
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this advanced smartwatch featuring heart rate',
      price: 299.99
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact speaker with powerfull bass and 12-hour battery life',
      price: 79.99,
      originalPrice: 99.99
    }
  ]);

  protected clearSearch(): void {
    this.searchTerm.set('');
  }

  protected trimSearch(): void {
    this.searchTerm.update((value) => value.trim());
  }

}
