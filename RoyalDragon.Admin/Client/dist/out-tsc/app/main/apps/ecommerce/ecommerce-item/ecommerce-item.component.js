import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
let EcommerceItemComponent = class EcommerceItemComponent {
    /**
     *
     * @param {EcommerceService} _ecommerceService
     */
    constructor(_ecommerceService) {
        this._ecommerceService = _ecommerceService;
        this.isWishlistOpen = false;
        // Public
        this.isInCart = false;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
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
    /**
     * Add To Cart
     *
     * @param product
     */
    addToCart(product) {
        this._ecommerceService.addToCart(product.id).then(res => {
            product.isInCart = true;
        });
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    ngOnInit() { }
};
__decorate([
    Input()
], EcommerceItemComponent.prototype, "product", void 0);
__decorate([
    Input()
], EcommerceItemComponent.prototype, "isWishlistOpen", void 0);
EcommerceItemComponent = __decorate([
    Component({
        selector: 'app-ecommerce-item',
        templateUrl: './ecommerce-item.component.html',
        styleUrls: ['./ecommerce-item.component.scss'],
        encapsulation: ViewEncapsulation.None,
        host: { class: 'ecommerce-application' }
    })
], EcommerceItemComponent);
export { EcommerceItemComponent };
//# sourceMappingURL=ecommerce-item.component.js.map