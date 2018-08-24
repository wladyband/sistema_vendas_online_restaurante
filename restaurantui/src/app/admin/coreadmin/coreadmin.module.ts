import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantAdminService } from '../services/restaurantAdmin.service';
import { UploadService } from '../services/upload.service';
import { MenuAdminService } from '../services/menuAdmin.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    RestaurantAdminService,
    MenuAdminService,
    UploadService


  ]
})
export class CoreadminModule { }
