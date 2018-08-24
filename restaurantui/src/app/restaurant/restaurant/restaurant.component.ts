import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant
  public is_edit;
  public url: string;

  constructor() {
    this.is_edit = true;
    this.url = environment.url;
   }

  ngOnInit() {
  }

}
