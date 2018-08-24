import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];
  public is_edit;
  public url: string;

  constructor(private restaurantService: RestaurantService){
    this.is_edit = true;
    this.url = environment.url;
  }

  ngOnInit() {
    this.restaurantService.restaurants()
   
    .subscribe(restaurants =>  
      console.log(this.restaurants = restaurants)
    )
    
  }

}
