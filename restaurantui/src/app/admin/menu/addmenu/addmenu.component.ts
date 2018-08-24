
import { MenuEdit } from './../../models/menuEdit';
import { Menu } from './../../models/menu';
import { UploadService } from './../../services/upload.service';
import { Router } from '@angular/router';
import { MenuAdminService } from './../../services/menuAdmin.service';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../../services/notification.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'mt-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  title: string

  public menu: MenuEdit;
  public menusCategorias = [];
  public url: string;
  public status;

  constructor(
    private menuAdminService: MenuAdminService,
    private _router: Router,
    private notificationService: NotificationService,
    private _uploadService: UploadService
  ) { 
    this.title = 'Adicionar Menu';
    this.url = environment.url;
    this.menu = new Menu('','','',6,'','');
  }

  ngOnInit() {
    this.carregarCategorias()
  }

  onSubmit(){
    this.menuAdminService.addMenu(this.menu).subscribe(
        response => {
         
          if (!response.menu) {
            this.status = 'error';
          } else {
               // console.log(response.restaurant)
                this.status = 'success';
                this.menu = response.menu;

          //submeter a imagem

          if (!this.filesToUpload) {
            this._router.navigate(['/admin-panel/menu']);
            } else {

            // Subida de la imagen  // this.token,
            this._uploadService.makeFileRequest(this.url+'/uploadMenu/'+
            this.menu._id, [], this.filesToUpload, 'image') 

            /**
             * OBS: para que o método upload de imagens funcione é necessário colocar _id?: no MenuEdit
             */
            
                .then((result: any) => {
                    this.menu.image = result.image;
                    this._router.navigate(['/admin-painel/menu']);
                  });
              }
              // fim do código upload
       

               this._router.navigate(['/admin-painel/menu']);
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


  carregarCategorias() {
    return this.menuAdminService.categoriasMenu()
      .then(menu => {
        this.menusCategorias = menu.menu.map(c => ({ label: c.name, value: c.id }));
     // console.log(this.menu)
      })
      
  }


}
