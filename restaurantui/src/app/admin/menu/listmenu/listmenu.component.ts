import { NotificationService } from './../../../services/notification.service';

import { ContratoMenu } from './../../services/menuAdmin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { MenuAdminService } from '../../services/menuAdmin.service';

@Component({
  selector: 'mt-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css']
})
export class ListmenuComponent implements OnInit {

  
  totalRegistros = 0;
  filtro = new ContratoMenu()
  menu = [];
  @ViewChild('tabela') grid;

  public title: string;
    
  constructor(
    private _menuService: MenuAdminService,
    private notificationService: NotificationService,
    private confirmation: ConfirmationService
  ) {
      this.title = 'Lista de Cardápios';
    }

  ngOnInit() {
  }

  pesquisar(pagina = 0){
    this.filtro.pagina = pagina;
    this._menuService.pesquisar(this.filtro)
    .then(resultado => {
     
         this.totalRegistros = resultado.total;
        
        this.menu = resultado.menus;
       
    });
  }
  
  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  
  confirmarExclusao(menu: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(menu);
      }
    });
  }
  
  excluir(menu: any) {
    this._menuService.excluir(menu._id)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
  
        this.notificationService.notify(`Você excluiu o menu ${menu.name} com sucesso`);
      });
  }

  
}
