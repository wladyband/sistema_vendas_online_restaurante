import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './order/order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutComponent } from './about/about.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { DeliveryCostComponent } from './delivery-cost/delivery-cost.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule
  ],
  declarations: [
    NotfoundComponent, 
    RestaurantComponent, 
     HomeComponent, 
     HeaderComponent, 
     MenuComponent, 
     OrderComponent, 
     ShoppingCartComponent,
     ReviewsComponent, 
    
     AboutComponent, 
     MenuItemComponent, 
     RestaurantsComponent, 
     RestaurantDetailComponent, 
     OrderSumaryComponent, 
     DeliveryCostComponent, 
     OrderItensComponent
  ],
  exports: [HeaderComponent]
})
export class RestaurantModule { }
