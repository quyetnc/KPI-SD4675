import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
let EcommerceCheckoutItemComponent = class EcommerceCheckoutItemComponent {
    /**
     * Constructor
     *
     * @param {EcommerceService} _ecommerceService
     */
    constructor(_ecommerceService) {
        this._ecommerceService = _ecommerceService;
    }
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
    /**
     * Toggle Wishlist
     *
     * @param product
     */
    toggleWishlist(product) {
        if (product.isInWishlist === true) {
            this._ecommerceService.removeFromWishlist(product.id).then(res => {
                product.isInWishlist = false;
            });
        }
        else {
            this._ecommerceService.addToWishlist(product.id).then(res => {
                product.isInWishlist = true;
            });
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    ngOnInit() { }
};
__decorate([
    Input()
], EcommerceCheckoutItemComponent.prototype, "product", void 0);
EcommerceCheckoutItemComponent = __decorate([
    Component({
        selector: 'app-ecommerce-checkout-item',
        templateUrl: './ecommerce-checkout-item.component.html',
        styleUrls: ['../ecommerce-checkout.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], EcommerceCheckoutItemComponent);
export { EcommerceCheckoutItemComponent };
//# sourceMappingURL=ecommerce-checkout-item.component.js.map