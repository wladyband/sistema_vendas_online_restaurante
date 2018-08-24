import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from 'environments/environment';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Restaurant } from '../models/restaurant.model';


import { ErrorHandler } from '../core/app.error-handler';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from '../models/menu-item.model';


@Injectable()
export class RestaurantService {

  public url: String;

  rests: Restaurant[] = []




  constructor(
    private http: Http
  ) {
    this.url = environment.url;
   }

   clear(){
    this.rests = []
  }

   editRestaurant(id, restaurant){
     let params = JSON.stringify(restaurant)
     let headers = new Headers({
      'Content-Type':'application/json'
     });

     return this.http.put(this.url+'restaurantEdit/'+id, params, {headers: headers})
               .map(res => res.json());
  }

  /* getEvento(id){
    return this._http.get(this.url+'evento/'+id).map(res => res.json());
  }*/

    restaurants(): Observable<Restaurant[]> {
      return this.http.get(`${this.url}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
    }


    restaurantById(id: string): Observable<Restaurant> {
      return this.http.get(`${this.url}/restaurants/${id}`)
      .map(response =>
        response.json().restaurant)
      .catch(ErrorHandler.handlerError)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
      return this.http.get(`${this.url}/restaurants/${id}/reviews`)
      .map(response =>
        response.json().reviews)
      .catch(ErrorHandler.handlerError)
    }


    menuOfRestaurant(id: string): Observable<MenuItem[]> {
      return this.http.get(`${this.url}/restaurants/${id}/menu`)
      .map(response =>
       response.json().menus)
      .catch(ErrorHandler.handlerError)
    }

    saveRestaurant(restaurant: Restaurant): Observable <string> {
          const headers = new Headers()
          headers.append('Content-Type', 'application/json')
          return this.http.post(`${this.url}/add-restaurant`, 
                  JSON.stringify(restaurant),
                    new RequestOptions({ headers: headers }))
                    .map(response => response.json());
         
                  
      }
 

}



