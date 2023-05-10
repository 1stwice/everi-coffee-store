import { Component } from '@angular/core';
import { CartItemsService } from 'src/app/services/cart-items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  quantity = 0;

  constructor(private cartItemsService: CartItemsService) {}
  
  ngOnInit() {
    this.cartItemsService.currentData.subscribe(data => {
      this.quantity = data.length
    })
  }

}
