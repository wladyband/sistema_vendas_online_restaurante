import { Component, OnInit } from '@angular/core';

import { environment } from 'environments/environment';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RestaurantAdminService } from '../../services/restaurantAdmin.service';
import { NotificationService } from '../../../services/notification.service';
import { RestaurantEdit } from '../../models/restaurantEdit';
import { ErrorHandler } from '../../../core/app.error-handler';
import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'mt-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public title: string;
  restaurant = new RestaurantEdit()
  public url: string;
  public status;
  public codigoLancamento;
  public is_edit;
 
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _restaurantAdminService: RestaurantAdminService,
    private notificationService: NotificationService,
    private _uploadService: UploadService
  ) {
      this.title = 'Atualizar Restaurant';
      this.is_edit = true;
      this.url = environment.url;
  }


  ngOnInit() {
    this.codigoLancamento = this._route.snapshot.params['id'];
    this.getRestaurant();
   // this.carregarLancamento(codigoLancamento);
  }


 getRestaurant(){
        this._route.params.forEach((params: Params) => {
          let id = params['id'];
      
              this._restaurantAdminService.getRestaurant(id).subscribe(
                    response => {
                   
                      if (!response.restaurants) {
                        this._router.navigate(['/admin-painel/listas']);
                      } else {
                        this.restaurant = response.restaurants;
                      }
                    },
                    error => {
                      console.log(<any>error);
                      this._router.navigate(['/admin-painel/listas']);
                    }
                  );

                });
        }
            


onSubmit(){
          // var id = this.restaurant._id;
    var id = this.codigoLancamento;
    this._restaurantAdminService.editRestaurant( id , this.restaurant).subscribe(
             response => {
               if(!response.restaurant) {
                 this.status = 'error';
               } else {
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
                 this.notificationService.notify(`Você atualizou com sucesso`);  
               
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
        console.log(this.filesToUpload)
 }
       




}
 /* carregarLancamento(id: string) {
    this._restaurantAdminService.getRestaurant(id)
    .subscribe(
      response => {
       
        if(!response.restaurants) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.restaurant = response.restaurants;
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