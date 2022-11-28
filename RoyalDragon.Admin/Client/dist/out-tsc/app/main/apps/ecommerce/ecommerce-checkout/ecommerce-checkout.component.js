import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import Stepper from 'bs-stepper';
let EcommerceCheckoutComponent = class EcommerceCheckoutComponent {
    /**
     *  Constructor
     *
     * @param {EcommerceService} _ecommerceService
     */
    constructor(_ecommerceService) {
        this._ecommerceService = _ecommerceService;
        this.address = {
            fullNameVar: '',
            numberVar: '',
            flatVar: '',
            landmarkVar: '',
            cityVar: '',
            pincodeVar: '',
            stateVar: ''
        };
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Stepper Next
     */
    nextStep() {
        this.checkoutStepper.next();
    }
    /**
     * Stepper Previous
     */
    previousStep() {
        this.checkoutStepper.previous();
    }
    /**
     * Validate Next Step
     *
     * @param addressForm
     */
    validateNextStep(addressForm) {
        if (addressForm.valid) {
            this.nextStep();
        }
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
        // Subscribe to Cartlist change
        this._ecommerceService.onCartListChange.subscribe(res => (this.cartLists = res));
        // Subscribe to Wishlist change
        this._ecommerceService.onWishlistChange.subscribe(res => (this.wishlist = res));
        // update product is in Wishlist & is in CartList : Boolean
        this.products.forEach(product => {
            product.isInWishlist = this.wishlist.findIndex(p => p.productId === product.id) > -1;
            product.isInCart = this.cartLists.findIndex(p => p.productId === product.id) > -1;
        });
        this.checkoutStepper = new Stepper(document.querySelector('#checkoutStepper'), {
            linear: false,
            animation: true
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Checkout',
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
                        name: 'Checkout',
                        isLink: false
                    }
                ]
            }
        };
    }
};
EcommerceCheckoutComponent = __decorate([
    Component({
        selector: 'app-ecommerce-checkout',
        templateUrl: './ecommerce-checkout.component.html',
        styleUrls: ['./ecommerce-checkout.component.scss'],
        encapsulation: ViewEncapsulation.None,
        host: { class: 'ecommerce-application' }
    })
], EcommerceCheckoutComponent);
export { EcommerceCheckoutComponent };
//# sourceMappingURL=ecommerce-checkout.component.js.map