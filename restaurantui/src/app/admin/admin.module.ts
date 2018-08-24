import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './restaurant/main/main.component';
import { ListComponent } from './restaurant/list/list.component';
import { AddComponent } from './restaurant/add/add.component';
import { EditComponent } from './restaurant/edit/edit.component';
import { AdminRoutingModule } from './routes/admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddmenuComponent } from './menu/addmenu/addmenu.component';
import { ListmenuComponent } from './menu/listmenu/listmenu.component';
import { EditmenuComponent } from './menu/editmenu/editmenu.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
   
    FormsModule,
    AdminRoutingModule,
    SharedModule,

    //Módulos de terceiros
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    DropdownModule
   
  ],
  declarations: [
    MainComponent, 
    ListComponent, 
    AddComponent, 
    EditComponent,
 
    
    AddmenuComponent, 
    ListmenuComponent, 
    EditmenuComponent
  ],
  exports: [
    MainComponent, 
    ListComponent, 
    AddComponent, 
    EditComponent, 
  
    
    AddmenuComponent, 
    ListmenuComponent, 
    EditmenuComponent
  ], 
  
})
export class AdminModule { }
