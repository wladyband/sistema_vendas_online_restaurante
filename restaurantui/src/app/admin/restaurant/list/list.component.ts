import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Restaurant } from '../../models/restaurant';
import { RestaurantAdminService } from '../../services/restaurantAdmin.service';
declare var $:any;
@Component({
  selector: 'mt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  public title: string;
  public restaurants: Restaurant[];
  public numbers = new Array(10);
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _restaurantService: RestaurantAdminService
  ) {
      this.title = 'Adicionar Restaurantes';
   
    }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this._restaurantService.getRestaurants().subscribe(
      response => {
       // console.log(response)
        if (!response) {
          
        } else {
          this.restaurants = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }


  deleteRestaurant(id){
        $('#myModal-'+id).modal('hide');
        this._restaurantService.deleteRestaurant(id).subscribe(
          response => {
            if(!response.restaurant){
              alert('Error do servidor');
            }
            this.getRestaurants();
          },
          error => {
            alert('Error en el servidor');
          }
        );
  }


}
