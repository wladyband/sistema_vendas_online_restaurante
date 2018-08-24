import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from 'environments/environment';
import { CartItem } from '../models/cart-item.model';
import { Order } from '../models/order.model';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class OrderService {

  public url: String;

  public order: Order;


  constructor(
    private cartService: ShoppingCartService,
    private http: Http,
  
  ) {
    this.url = environment.url;
   }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }
 
  itemsValue(): number {
      return this.cartService.total()
  }

  clear() {
    this.cartService.clear()
  }

  checkOrder(order): Observable <string> {
    
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      return this.http.post(`${this.url}/orders`, 
               JSON.stringify(order),
                new RequestOptions({ headers: headers }))
                .map(response => response.json())
              
        }
    
    
}
