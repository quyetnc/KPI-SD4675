import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let EcommerceShopComponent = class EcommerceShopComponent {
    /**
     *
     * @param {CoreSidebarService} _coreSidebarService
     * @param {EcommerceService} _ecommerceService
     */
    constructor(_coreSidebarService, _ecommerceService) {
        this._coreSidebarService = _coreSidebarService;
        this._ecommerceService = _ecommerceService;
        this.shopSidebarToggle = false;
        this.shopSidebarReset = false;
        this.gridViewRef = true;
        this.page = 1;
        this.pageSize = 9;
        this.searchText = '';
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle Sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    /**
     * Update to List View
     */
    listView() {
        this.gridViewRef = false;
    }
    /**
     * Update to Grid View
     */
    gridView() {
        this.gridViewRef = true;
    }
    /**
     * Sort Product
     */
    sortProduct(sortParam) {
        this._ecommerceService.sortProduct(sortParam);
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
            this.products.isInWishlist = false;
        });
        // Subscribe to Wishlist change
        this._ecommerceService.onWishlistChange.subscribe(res => (this.wishlist = res));
        // Subscribe to Cartlist change
        this._ecommerceService.onCartListChange.subscribe(res => (this.cartList = res));
        // update product is in Wishlist & is in CartList : Boolean
        this.products.forEach(product => {
            product.isInWishlist = this.wishlist.findIndex(p => p.productId === product.id) > -1;
            product.isInCart = this.cartList.findIndex(p => p.productId === product.id) > -1;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Shop',
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
                        name: 'Shop',
                        isLink: false
                    }
                ]
            }
        };
    }
};
EcommerceShopComponent = __decorate([
    Component({
        selector: 'app-ecommerce-shop',
        templateUrl: './ecommerce-shop.component.html',
        styleUrls: ['./ecommerce-shop.component.scss'],
        encapsulation: ViewEncapsulation.None,
        host: { class: 'ecommerce-application' }
    })
], EcommerceShopComponent);
export { EcommerceShopComponent };
//# sourceMappingURL=ecommerce-shop.component.js.map