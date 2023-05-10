import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: Item[] = [];

  constructor(private router: Router, private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(res => {
      this.items = res;
    })
  }

  goToItem() {
    this.router.navigate(['item']);
  }
}
