import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let EcommerceWishlistComponent = class EcommerceWishlistComponent {
    /**
     *
     * @param {EcommerceService} _ecommerceService
     */
    constructor(_ecommerceService) {
        this._ecommerceService = _ecommerceService;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to ProductList change
        this._ecommerceService.onProductListChange.subscribe(res => {
            this.products = res;
        });
        // Subscribe to Wishlist change
        this._ecommerceService.onWishlistChange.subscribe(res => (this.wishlist = res));
        // update product is in Wishlist : Boolean
        this.products.forEach(product => {
            product.isInWishlist = this.wishlist.findIndex(p => p.productId === product.id) > -1;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Wish List',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'eCommerce',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Wish List',
                        isLink: false
                    }
                ]
            }
        };
    }
};
EcommerceWishlistComponent = __decorate([
    Component({
        selector: 'app-ecommerce-wishlist',
        templateUrl: './ecommerce-wishlist.component.html',
        styleUrls: ['./ecommerce-wishlist.component.scss'],
        encapsulation: ViewEncapsulation.None,
        host: { class: 'ecommerce-application' }
    })
], EcommerceWishlistComponent);
export { EcommerceWishlistComponent };
//# sourceMappingURL=ecommerce-wishlist.component.js.map