import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';
import { Product } from './api/models';
@Injectable({
    providedIn: 'root',
})
export class CartService {
    items: CartItem[] = [];
    itemsCompare: Array<Number> = [];
    itemsWish: Product[] = [];

    constructor(private _toastrService: ToastrService, private notifierService: NotifierService) {
        if (sessionStorage.getItem("cart") != null)
            this.items = [...JSON.parse(sessionStorage.getItem("cart"))];
        if (sessionStorage.getItem("wish") != null)
            this.itemsWish = [...JSON.parse(sessionStorage.getItem("wish"))];
        if (sessionStorage.getItem("compare") != null)
            this.itemsCompare = [...JSON.parse(sessionStorage.getItem("compare"))];
    }

    addToCart(productId: number, quantity: number = 1) {
        const check_index = this.items.findIndex(
            (item) => item.productId === productId
        );
        if (check_index !== -1) {
            this.notifierService.notify('error', 'Đã xoá tồn tại trong giỏ hàng');
        } else {
            this.items.push({ productId, quantity });
            this.notifierService.notify('success', 'Đã thêm vào giỏ hàng');
        }
        sessionStorage.setItem('cart', JSON.stringify(this.items));
    }
    addToCompare(productId: number) {
        const check_index = this.itemsCompare.findIndex(
            (item) => item === productId
        );
        if (check_index !== -1) {
            this.notifierService.notify('error', 'Đã xoá trong danh sách so sánh');
            // this._toastrService.warning(
            //     'Đã xoá tồn tại trong giỏ hàng', 'Thông báo',
            //     { toastClass: 'toast ngx-toastr', closeButton: true }
            // );
        } else {
            this.itemsCompare.push(productId);
            this.notifierService.notify('success', 'Đã thêm vào danh sách so sánh');
            // this._toastrService.success(
            //     'Đã thêm vào giỏ hàng', 'Thông báo',
            //     { toastClass: 'toast ngx-toastr', closeButton: true }
            // );
        }
        sessionStorage.setItem('compare', JSON.stringify(this.itemsCompare));
    }
    updateToCart(productId: number, quantity: number = 1) {
        const check_index = this.items.findIndex(
            (item) => item.productId === productId
        );
        if (check_index !== -1) {
            this.items[check_index].quantity = quantity;
            this.notifierService.notify('success', 'Cập nhật thành công');
            // this._toastrService.warning(
            //     'Đã xoá tồn tại trong giỏ hàng', 'Thông báo',
            //     { toastClass: 'toast ngx-toastr', closeButton: true }
            // );
        } else {
            this.items.push({ productId, quantity });
            this.notifierService.notify('error', 'Sản phẩm không tồn tại trong giỏ hàng');
            // this._toastrService.success(
            //     'Đã thêm vào giỏ hàng', 'Thông báo',
            //     { toastClass: 'toast ngx-toastr', closeButton: true }
            // );
        }
        sessionStorage.setItem('cart', JSON.stringify(this.items));
    }
    addToWishlist(product: Product, quantity: number = 1) {
        const check_index = this.itemsWish.findIndex(
            (itemsWish) => itemsWish.productId === product.productId
        );
        if (check_index !== -1) {
            this._toastrService.warning(
                'Đã xoá khỏi danh sách yêu thích', 'Thông báo',
                { toastClass: 'toast ngx-toastr', closeButton: true }
            );
            this.itemsWish = [...this.itemsWish.filter(x => x.productId != product.productId)];
        } else {
            this._toastrService.success(
                'Đã thêm vào danh sách yêu thích', 'Thông báo',
                { toastClass: 'toast ngx-toastr', closeButton: true }
            );
            this.itemsWish.push({ ...product, quantity });
        }
        sessionStorage.setItem('wish', JSON.stringify(this.itemsWish));
    }
    // getTotal() {
    //     const total = this.items.reduce((acc, el) => {
    //         console.log(el);
    //         acc += el.priceOutput * el.quantity;
    //         return acc;
    //     }, 0);
    //     return ((total * 100) / 100);
    // }

    getItems() {
        return this.items;
    }
    getItemsWish() {
        return this.itemsWish;
    }
    getItemsCompare() {
        return this.itemsCompare;
    }
    deleteFromCart(productID: any) {
        const items = this.items.filter((item) => item.productId === productID);
        const index = this.items.indexOf(items[0]);
        if (index > -1) {
            this.items.splice(index, 1);
            this.notifierService.notify('success', 'Xóa thành công');
            sessionStorage.setItem('cart', JSON.stringify(this.items));
        }
    }
    deleteFromCompare(productID: any) {
        const items = this.itemsCompare.filter((item) => item === productID);
        const index = this.itemsCompare.indexOf(items[0]);
        if (index > -1) {
            this.itemsCompare.splice(index, 1);
            this.notifierService.notify('success', 'Xóa thành công');
            sessionStorage.setItem('compare', JSON.stringify(this.itemsCompare));
        }
    }
    deleteFromWish(productID: any) {
        const items = this.itemsWish.filter((item) => item.productId === productID);
        const index = this.itemsWish.indexOf(items[0]);
        if (index > -1) {
            this.notifierService.notify('success', 'Xóa thành công');
            this.items.splice(index, 1);
            sessionStorage.setItem('wish', JSON.stringify(this.itemsWish));
        }
    }

    clearCart() {
       sessionStorage.removeItem("cart");
        this.items = [];
        return this.items;
    }
    clearWish() {
        this.itemsWish = [];
        return this.itemsWish;
    }
}

/**
 * interface CartItem
 */
export interface CartItem {
    productId: number,
    quantity: number
}