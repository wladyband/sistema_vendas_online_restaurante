import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { NotfoundComponent } from "../notfound/notfound.component";
import { MenuComponent } from "../menu/menu.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { RestaurantsComponent } from "../restaurants/restaurants.component";
import { RestaurantDetailComponent } from "../restaurant-detail/restaurant-detail.component";
import { AboutComponent } from "../about/about.component";
import { OrderComponent } from "../order/order.component";
import { OrderSumaryComponent } from "../order-sumary/order-sumary.component";
import { MainComponent } from "../../admin/restaurant/main/main.component";






// revisar a aula 94, porém parei na aula 85 
const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
          { path: '', redirectTo: 'menu', pathMatch: 'full' },
          { path: 'menu', component: MenuComponent },
          { path: 'reviews', component: ReviewsComponent }
        ]},
  { path: 'about', component: AboutComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-summary', component: OrderSumaryComponent },
  { path: 'admin-painel/listas', component: MainComponent },
  


  { path: '**', component: NotfoundComponent }

];


/*
,
      children: [
        { path: '', redirectTo: 'menu', pathMatch: 'full' },
        { path: 'menu', component: MenuComponent },
        { path: 'reviews', component: ReviewsComponent }
      ]},

      */


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
