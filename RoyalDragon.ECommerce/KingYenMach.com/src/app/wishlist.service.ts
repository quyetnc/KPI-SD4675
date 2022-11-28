import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root',
})
export class WishListService {
    items: Product[] = [];

    constructor() {}

    addToWishlist(product: Product, quantity: number = 1) {
        const check_index = this.items.findIndex(
            (item) => item.productId === product.productId
        );
        if (check_index !== -1) {
            this.items[check_index].quantity++;
        } else {
            this.items.push({ ...product, quantity });
        }
    }

    // getTotal() {
    //     const total = this.items.reduce((acc, el) => {
    //         acc += el.currentPrice * el.quantity;
    //         return acc;
    //     }, 0);
    //     return ((total * 100) / 100).toFixed(2);
    // }

    getItems() {
        return this.items;
    }

    // deleteFromCart(productID: any) {
    //     const items = this.items.filter((item) => item.productId === productID);
    //     const index = this.items.indexOf(items[0]);
    //     if (index > -1) {
    //         this.items.splice(index, 1);
    //     }
    // }

    // clearCart() {
    //     this.items = [];
    //     return this.items;
    // }
}