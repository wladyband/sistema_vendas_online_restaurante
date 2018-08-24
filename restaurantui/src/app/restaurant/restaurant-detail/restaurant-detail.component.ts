import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

        restaurant: Restaurant

        constructor(
          private restaurantService: RestaurantService,
          private route: ActivatedRoute
        ) { }


        ngOnInit() {
          this.restaurantService.restaurantById(this.route.snapshot.params['id'])
          .subscribe(restaurant =>  
           this.restaurant = restaurant) 
        }


}
