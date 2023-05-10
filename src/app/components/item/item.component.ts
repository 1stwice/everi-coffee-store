import { Component, inject } from '@angular/core';
import {Location} from '@angular/common';
import { Item } from 'src/app/models/item.model';
import { CartItemsService } from 'src/app/services/cart-items.service';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  cartItems!: Item[]

  item!: Item;

  constructor(private _location: Location, private itemsService: ItemsService, private cartItemService: CartItemsService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(res => {
      this.item = res[0];
    });
    this.cartItems = this.cartItemService.data.value
  }

  goBack() {
    this._location.back()
  }

  addItem() {
    this.cartItems.push(this.item);
    this.cartItemService.setData(this.cartItems);
    this._snackBar.open('Item Added!', 'OK', {
      duration: 2000
    });
  }

}
