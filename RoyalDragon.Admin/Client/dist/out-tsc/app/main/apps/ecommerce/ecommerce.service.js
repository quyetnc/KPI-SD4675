import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let EcommerceService = class EcommerceService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.sortRef = key => (a, b) => {
            const fieldA = a[key];
            const fieldB = b[key];
            let comparison = 0;
            if (fieldA > fieldB) {
                comparison = 1;
            }
            else if (fieldA < fieldB) {
                comparison = -1;
            }
            return comparison;
        };
        this.onProductListChange = new BehaviorSubject({});
        this.onRelatedProductsChange = new BehaviorSubject({});
        this.onWishlistChange = new BehaviorSubject({});
        this.onCartListChange = new BehaviorSubject({});
        this.onSelectedProductChange = new BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        this.idHandel = route.params.id;
        return new Promise((resolve, reject) => {
            Promise.all([this.getProducts(), this.getWishlist(), this.getCartList(), this.getSelectedProduct()]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get Products
     */
    getProducts() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/ecommerce-products').subscribe((response) => {
                this.productList = response;
                this.sortProduct('featured'); // Default shorting
                resolve(this.productList);
            }, reject);
        });
    }
    /**
     * Get Wishlist
     */
    getWishlist() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/ecommerce-userWishlist').subscribe((response) => {
                this.wishlist = response;
                this.onWishlistChange.next(this.wishlist);
                resolve(this.wishlist);
            }, reject);
        });
    }
    /**
     * Get CartList
     */
    getCartList() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/ecommerce-userCart').subscribe((response) => {
                this.cartList = response;
                this.onCartListChange.next(this.cartList);
                resolve(this.cartList);
            }, reject);
        });
    }
    /**
     * Get Selected Product
     */
    getSelectedProduct() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/ecommerce-products?id=' + this.idHandel).subscribe((response) => {
                this.selectedProduct = response;
                this.onSelectedProductChange.next(this.selectedProduct);
                resolve(this.selectedProduct);
            }, reject);
        });
    }
    /**
     * Get Related Products
     */
    getRelatedProducts() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/ecommerce-relatedProducts').subscribe((response) => {
                this.relatedProducts = response;
                this.onRelatedProductsChange.next(this.relatedProducts);
                resolve(this.relatedProducts);
            }, reject);
        });
    }
    /**
     * Sort Product
     *
     * @param sortBy
     */
    sortProduct(sortBy) {
        let sortDesc = false;
        const sortByKey = (() => {
            if (sortBy === 'price-desc') {
                sortDesc = true;
                return 'price';
            }
            if (sortBy === 'price-asc') {
                return 'price';
            }
            sortDesc = true;
            return 'id';
        })();
        const sortedData = this.productList.sort(this.sortRef(sortByKey));
        if (sortDesc)
            sortedData.reverse();
        this.productList = sortedData;
        this.onProductListChange.next(this.productList);
    }
    /**
     * Add In Wishlist
     *
     * @param id
     */
    addToWishlist(id) {
        return new Promise((resolve, reject) => {
            const lengthRef = this.wishlist.length + 1;
            const wishRef = { id: lengthRef, productId: id };
            this._httpClient.post('api/ecommerce-userWishlist/' + lengthRef, { ...wishRef }).subscribe(response => {
                this.getWishlist();
                resolve();
            }, reject);
        });
    }
    /**
     * Remove From Wishlist
     *
     * @param id
     */
    removeFromWishlist(id) {
        const indexRef = this.wishlist.findIndex(wishlistRef => wishlistRef.productId === id); // Get the index ref
        const indexId = this.wishlist[indexRef].id; // Get the product wishlist id from indexRef
        return new Promise((resolve, reject) => {
            this._httpClient.delete('api/ecommerce-userWishlist/' + indexId).subscribe((response) => {
                this.getWishlist();
                resolve();
            }, reject);
        });
    }
    /**
     * Add In Cart
     *
     * @param id
     */
    addToCart(id) {
        return new Promise((resolve, reject) => {
            const maxValueId = Math.max(...this.cartList.map(cart => cart.id), 0) + 1;
            const cartRef = { id: maxValueId, productId: id, qty: 1 };
            var cartId = '';
            // If cart is not Empty
            if (maxValueId !== 1) {
                cartId = maxValueId;
            }
            this._httpClient.post('api/ecommerce-userCart/' + cartId, { ...cartRef }).subscribe(response => {
                this.getCartList();
                resolve();
            }, reject);
        });
    }
    /**
     * Remove From Cart
     *
     * @param id
     */
    removeFromCart(id) {
        const indexRef = this.cartList.findIndex(cartListRef => cartListRef.productId === id); // Get the index ref
        const indexId = this.cartList[indexRef].id; // Get the product wishlist id from indexRef
        return new Promise((resolve, reject) => {
            this._httpClient.delete('api/ecommerce-userCart/' + indexId).subscribe((response) => {
                this.getCartList();
                resolve();
            }, reject);
        });
    }
};
EcommerceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EcommerceService);
export { EcommerceService };
//# sourceMappingURL=ecommerce.service.js.map