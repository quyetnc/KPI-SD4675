import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let EcommerceDetailsComponent = class EcommerceDetailsComponent {
    /**
     * Constructor
     *
     * @param {EcommerceService} _ecommerceService
     */
    constructor(_ecommerceService) {
        this._ecommerceService = _ecommerceService;
        // Swiper
        this.swiperResponsive = {
            slidesPerView: 3,
            spaceBetween: 50,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        };
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
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Selected Product change
        this._ecommerceService.onSelectedProductChange.subscribe(res => {
            this.product = res[0];
        });
        // Subscribe to Wishlist change
        this._ecommerceService.onWishlistChange.subscribe(res => (this.wishlist = res));
        // Subscribe to Cartlist change
        this._ecommerceService.onCartListChange.subscribe(res => (this.cartList = res));
        // Get Related Products
        this._ecommerceService.getRelatedProducts().then(response => {
            this.relatedProducts = response;
        });
        this.product.isInWishlist = this.wishlist.findIndex(p => p.productId === this.product.id) > -1;
        this.product.isInCart = this.cartList.findIndex(p => p.productId === this.product.id) > -1;
        // content header
        this.contentHeader = {
            headerTitle: 'Product Details',
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
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Details',
                        isLink: false
                    }
                ]
            }
        };
    }
};
EcommerceDetailsComponent = __decorate([
    Component({
        selector: 'app-ecommerce-details',
        templateUrl: './ecommerce-details.component.html',
        styleUrls: ['./ecommerce-details.component.scss'],
        encapsulation: ViewEncapsulation.None,
        host: { class: 'ecommerce-application' }
    })
], EcommerceDetailsComponent);
export { EcommerceDetailsComponent };
//# sourceMappingURL=ecommerce-details.component.js.map