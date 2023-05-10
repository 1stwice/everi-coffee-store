import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  constructor() { }

  data = new BehaviorSubject<Item[]>([])
  currentData = this.data.asObservable();

  setData(data: Item[]) {
    this.data.next(data);
  }
}
