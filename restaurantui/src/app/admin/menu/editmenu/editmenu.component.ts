import { MenuEdit } from './../../models/menuEdit';
import { UploadService } from './../../services/upload.service';
import { NotificationService } from './../../../services/notification.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MenuAdminService } from './../../services/menuAdmin.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Component({
  selector: 'mt-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent implements OnInit {

  public title: string;
  public url: string;
  menu = new MenuEdit()
  public menusCategorias = [];
  public status;
  public codigoLancamento;
  public is_edit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private menuAdminService: MenuAdminService,
    private notificationService: NotificationService,
    private _uploadService: UploadService
  ) {
    this.title = 'Atualizar Restaurant';
    this.is_edit = true;
    this.url = environment.url;
   }

  ngOnInit() {
    this.codigoLancamento = this._route.snapshot.params['id'];
    this.carregarCategorias()
    this.getMenuEdit();
  }




  
  carregarCategorias() {
    return this.menuAdminService.categoriasMenu()
      .then(menu => {
        this.menusCategorias = menu.menu.map(c => ({ label: c.name, value: c.id }));
    // console.log(this.menusCategorias)
      })
      
  }



  getMenuEdit(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
  
          this.menuAdminService.getMenuEdit(id).subscribe(
                response => {
               
                  if (!response.menus) {
                    this._router.navigate(['/admin-painel/menu']);
                  } else {
                    this.menu = response.menus;
                  }
                },
                error => {
                  console.log(<any>error);
                  this._router.navigate(['/admin-painel/menu']);
                }
              );

            });
    }


onSubmit(){
      // var id = this.restaurant._id;
var id = this.codigoLancamento;
this.menuAdminService.editMenu( id , this.menu).subscribe(
         response => {
           if(!response.menu) {
             this.status = 'error';
           } else {
             this.status = 'success';
             this.menu = response.menu;
           
              //submeter a imagem

            if (!this.filesToUpload) {
              this._router.navigate(['/admin-panel/menu']);
              } else {

              // Subida de la imagen  // this.token,
              this._uploadService.makeFileRequest(this.url+'/uploadMenu/'+
              this.menu._id, [], this.filesToUpload, 'image') // entidade do construtor
                  .then((result: any) => {
                      this.menu.image = result.image;
                      this._router.navigate(['/admin-painel/menu']);
                    });
                }
                // fim do código upload
           
   
   
             this._router.navigate(['/admin-painel/menu']);
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
    
    }


}
