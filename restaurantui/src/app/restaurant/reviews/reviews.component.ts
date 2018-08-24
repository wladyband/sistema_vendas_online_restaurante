import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from '../../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantService
    .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
    
  }

}
