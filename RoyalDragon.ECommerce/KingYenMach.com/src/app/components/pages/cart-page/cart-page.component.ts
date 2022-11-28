import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

    private readonly notifier: NotifierService;
    products = this.cartService.getItems();
    // total = this.cartService.getTotal();

    constructor(
        private cartService: CartService,
        notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    onDeleteItem(productID: any) {
        this.cartService.deleteFromCart(productID);
        this.notifier.notify('info', 'Your product removed from the cart!');
        // this.total = this.cartService.getTotal();
    }
}