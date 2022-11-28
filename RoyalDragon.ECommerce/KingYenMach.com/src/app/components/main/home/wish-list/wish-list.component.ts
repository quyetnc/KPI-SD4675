import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../cart.serviceclient';
import { environment } from 'environments/environment';
import { NotifierService } from 'angular-notifier';
import { Product } from 'app/api/models';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  products = this.CartService.getItems()
  apiUrl: string;
  private readonly notifier: NotifierService;
  constructor(
    private CartService: CartService,
    notifierService: NotifierService,
  ) { 
    this.notifier = notifierService;
  }
  addToCart(product: Product) {
    this.CartService.addToCart(product.productId);
    this.notifier.notify('success', 'Your product added to the cart!');
  }
  ngOnInit(): void {
    this.apiUrl = environment.apiUrl + '/';
  }

}
