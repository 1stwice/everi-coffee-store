import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
      return this.httpClient.get<Item[]>(Constants.itemsEndpoint);
  }
}
