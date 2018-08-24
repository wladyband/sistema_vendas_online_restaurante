import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { MenuItem } from '../../models/menu-item.model';
import { RestaurantService } from '../../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menu: Observable<MenuItem[]>


  constructor(
    private restaurantService: RestaurantService,
    private route:  ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantService
    .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }



}