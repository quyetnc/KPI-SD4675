import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let NavbarCartComponent = class NavbarCartComponent {
    /**
     *
     * @param {EcommerceService} _ecommerceService
     */
    constructor(_ecommerceService) {
        this._ecommerceService = _ecommerceService;
        // Public
        this.products = [];
        this.cartList = [];
        this._unsubscribeAll = new Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Remove From Cart
     *
     * @param product
     */
    removeFromCart(product) {
        if (product.isInCart === true) {
            this._ecommerceService.removeFromCart(product.id).then(res => {
                product.isInCart = false;
            });
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Get Products
        this._ecommerceService.getProducts();
        // Get Cart List
        this._ecommerceService.getCartList();
        // Subscribe to Cart List
        this._ecommerceService.onCartListChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.cartList = res;
            this.cartListLength = this.cartList.length;
        });
        // Subscribe to ProductList change
        this._ecommerceService.onProductListChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.products = res;
            if (this.products.length) {
                // update product is in CartList : Boolean
                this.products.forEach(product => {
                    product.isInCart = this.cartList.findIndex(p => p.productId === product.id) > -1;
                });
            }
        });
    }
};
NavbarCartComponent = __decorate([
    Component({
        selector: 'app-navbar-cart',
        templateUrl: './navbar-cart.component.html'
    })
], NavbarCartComponent);
export { NavbarCartComponent };
//# sourceMappingURL=navbar-cart.component.js.map