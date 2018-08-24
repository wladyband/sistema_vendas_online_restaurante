
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from 'environments/environment';
import { RestaurantEdit } from '../models/restaurantEdit';


export class ContratoMenu {
  price: number;
  description: string;  
  pagina = 0;
  itensPorPagina = 19;
};

@Injectable()
export class MenuAdminService {

      public url: string;
      restaurantE = new RestaurantEdit()


      constructor(private _http: Http) {
        this.url = environment.url;
      }


    getMenus(){
            return this._http.get(`${this.url}/menus`)
            .map(res => res.json());
    }


//atualizações
    addMenu(menu) {
      let params = JSON.stringify(menu);
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      return this._http.post(this.url+'/cria_menu', params, {headers: headers})
              .map(res => res.json());
    }



    categoriasMenu(){
      const headers = new Headers();
          
      return this._http.get(this.url+'/menuCategoria', { headers })
        .toPromise()
        .then(response => response.json());
    }

    pesquisar(filtro: ContratoMenu): Promise<any> {
          const params = new URLSearchParams();
          const headers = new Headers();
        
          params.set('skip', filtro.pagina.toString());
          params.set('limit', filtro.itensPorPagina.toString());


          if(filtro.price){
            params.set('price', filtro.price.toString());
          }


          return this._http.get(`${this.url}/menus`, 
          
          { headers, search: params })
          
          .toPromise()
          .then(response => {
            const resposeJson = response.json();
            const menus = resposeJson.data;

            const resultado = {
              menus,
              total: resposeJson.total
            };
            return resultado;
          })

    }



    excluir(_id: number): Promise<void> {
      const headers = new Headers();
      return this._http.delete(`${this.url}/menu/${_id}`, { headers })
      
        .toPromise()
        .then(() => null);
    }

}

