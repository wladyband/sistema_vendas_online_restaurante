import { EditmenuComponent } from './../menu/editmenu/editmenu.component';
import { AddmenuComponent } from './../menu/addmenu/addmenu.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "../restaurant/main/main.component";
import { ListComponent } from "../restaurant/list/list.component";
import { AddComponent } from "../restaurant/add/add.component";
import { EditComponent } from "../restaurant/edit/edit.component";
import { ListmenuComponent } from "../menu/listmenu/listmenu.component";



const adminRoutes: Routes = [
      {
        path: 'admin-painel', component: MainComponent,
           children: [
              { path: '', redirectTo: 'listas', pathMatch: 'full' },
              { path: 'listas', component: ListComponent },
              { path: 'menu', component: ListmenuComponent },
              { path: 'criar',  component: AddComponent },
              { path: 'editar/:id',  component: EditComponent },
              { path: 'cria_menu',  component: AddmenuComponent },
              { path: 'menuEditar/:id',  component: EditmenuComponent }
            ]},
];

@NgModule ({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ]
})

export class AdminRoutingModule { }
