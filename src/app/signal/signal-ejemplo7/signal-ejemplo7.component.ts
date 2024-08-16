import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

interface Product {
  id: number;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Producto A', price: 10},
  { id: 2, name: 'Producto B', price: 20},
  { id: 3, name: 'Producto C', price: 10},
  { id: 4, name: 'Producto D', price: 20}
]


@Component({
  selector: 'app-signal-ejemplo7',
  standalone: true,
  imports: [MatButton, NgFor, NgIf],
  templateUrl: './signal-ejemplo7.component.html',
  styleUrl: './signal-ejemplo7.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export default class SignalEjemplo7Component {
  products = signal(PRODUCTS);
  cart = signal<Product[]>([]);

  totalPrice = computed( () => {
    return this.cart().reduce( (acc, curr) => acc + curr.price, 0 )
  })

  selectProductsIds = computed( () => {
    return this.cart().map( (product) => product.id);
  })

  addToCart(product: Product){
    this.cart.update( (products) => {
      return [...products, product]
    })
  }

  removeFromCart(product: Product){
    this.cart.update( (products) => {
      return products.filter( (pro) => pro.id !== product.id )
    })
  }

}