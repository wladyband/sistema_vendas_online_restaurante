import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  
  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()
  public is_edit;
  public url: string;

  constructor() { }

  ngOnInit() {
    this.is_edit = true;
    this.url = environment.url;
  }

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}

