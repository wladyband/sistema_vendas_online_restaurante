import { Component, OnInit } from '@angular/core';

import { environment } from 'environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantAdminService } from '../../services/restaurantAdmin.service';
import { NotificationService } from '../../../services/notification.service';
import { UploadService } from '../../services/upload.service';
import { RestaurantEdit } from '../../models/restaurantEdit';
import { Restaurant } from '../../models/restaurant';


@Component({
  selector: 'mt-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  public title: string;
  
 // restaurant = new RestaurantEdit()
  public restaurant: RestaurantEdit;
  public url: string;
  public status;



  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _restaurantAdminService: RestaurantAdminService,
    private notificationService: NotificationService,
    private _uploadService: UploadService
  
  ) {
      this.title = 'Adicionar Evento';
      this.restaurant = new Restaurant('', '', '', '',6, '','');
      this.url = environment.url;
  }

  ngOnInit() {
  }

  onSubmit(){
    this._restaurantAdminService.addRestaurant(this.restaurant).subscribe(
        response => {
         
          if (!response.restaurant) {
            this.status = 'error';
          } else {
                console.log(response.restaurant)
                this.status = 'success';
                this.restaurant = response.restaurant;
               
                //submeter a imagem

                if (!this.filesToUpload) {
                  this._router.navigate(['/admin-panel/listas']);
                  } else {

                  // Subida de la imagen  // this.token,
                  this._uploadService.makeFileRequest(this.url+'/upload/'+
                  this.restaurant._id, [], this.filesToUpload, 'image') // entidade do construtor
                  
                      .then((result: any) => {
                          this.restaurant.image = result.image;
                          this._router.navigate(['/admin-painel/listas']);
                        });
                    }
                    // fim do código upload


               this._router.navigate(['/admin-painel/listas']);
               this.notificationService.notify(`Você adicionou com sucesso`);
            }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          this.status = 'error';
        }
      }
      );
    }


  public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
    
    }

}


/*
  onSubmit(){
    this._restaurantAdminService.addRestaurant(this.restaurant).subscribe(
        response => {
         
          if (!response.restaurant) {
            this.status = 'error';
          } else {
                console.log(response.restaurant)
                this.status = 'success';
                this.restaurant = response.restaurant;
               
                //submeter a imagem

                if (!this.filesToUpload) {
                  this._router.navigate(['/admin-panel/listar']);
                  } else {

                  // Subida de la imagen  // this.token,
                  this._uploadService.makeFileRequest(this.url+'/upload/'+
                  this.restaurantE._id, [], this.filesToUpload, 'image')
                      .then((result: any) => {
                          this.restaurant.image = result.image;
                          this._router.navigate(['/admin-painel/listar']);
                        });
                    }
                    // fim do código upload


               this._router.navigate(['/admin-painel/listas']);
               this.notificationService.notify(`Você adicionou com sucesso`);
            }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          this.status = 'error';
        }
      }
      );
    }
*/