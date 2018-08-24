
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { RestaurantEdit } from '../models/restaurantEdit';


@Injectable()
export class RestaurantAdminService {

  public url: string;
  restaurantE = new RestaurantEdit()


  constructor(private _http: Http) {
    this.url = environment.url;
   }


   addRestaurant(restaurant) {
      let params = JSON.stringify(restaurant);
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      return this._http.post(this.url+'/admin-painel/criar', params, {headers: headers})
              .map(res => res.json());
    }

	
	editRestaurant(id, restaurant){
      let params = JSON.stringify(restaurant);
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      return this._http.put(this.url+'/restaurant/'+id, params, {headers: headers})
               .map(res => res.json());
    }
	
	
	
	
	
    getRestaurants(){
      return this._http.get(this.url+'/listas').map(res => res.json());
    }

    getRestaurant(id){
      return this._http.get(this.url+'/admin-painel/edit/'+id).map(res => res.json());
    }

 

    deleteRestaurant(id){
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      let options = new RequestOptions({headers: headers});
      return this._http.delete(this.url+'/restaurant/'+id, options)
               .map(res => res.json());
    }



    saveRestaurant(restaurant: RestaurantEdit): Observable <string> {
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      return this._http.post(`${this.url}/add-restaurant/criar`, 
              JSON.stringify(restaurant),
                new RequestOptions({ headers: headers }))
                .map(response => response.json());
     
              
  }


}
