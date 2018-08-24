import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../services/notification.service';
import { OrderService } from '../services/order.service';
import { RestaurantService } from '../services/restaurant.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  providers: [
    NotificationService,
    OrderService,
    RestaurantService,
    ShoppingCartService
  ]
})
export class CoreModule { }
