import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
    NgbModalConfig,
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { ProductService } from 'app/api/services';
import { CartService } from 'app/cart.service';
import { ModalService } from 'app/modal.service';
import { Product } from 'app/product';
import { WishListService } from 'app/wishlist.service';
import { environment } from 'environments/environment';
@Component({
    selector: 'app-show-list-product',
    templateUrl: './show-list-product.component.html',
    styleUrls: ['./show-list-product.component.scss'],
})
export class ShowListProductComponent implements OnInit {
    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;
    closeModal: any;
    listProduct = [];
    apiUrl: string;
    CopyText: string;
    constructor(
        private httpClient: HttpClient,
        private modalService: NgbModal,
        private cartService: CartService,
        private wishListService: WishListService,
        notifierService: NotifierService,
        private modalViewService: ModalService,
        private _productService: ProductService
    ) {
        this.notifier = notifierService;
    }
    products: any = [];
    ngOnInit(): void {
        // this.httpClient.get("assets/data/products.json").subscribe(data =>{
        //   this.products = data;
        // });
        this.apiUrl = environment.apiUrl + '/';

        this._productService.apiProductListProductGet$Json().subscribe((rs) => {
            if (rs.success) {
                this.listProduct = [...rs.data];
            }
        });
    }
    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.notifier.notify('success', 'Your product added to the cart!');
    }
    addToModal(product: Product) {
        this.modalViewService.addToModal(product);
    }
    addToWishlist(product: Product) {
        this.wishListService.addToWishlist(product);
        this.notifier.notify('success', 'Your product added to the wishList!');
    }
    mySelectHandler(event: any) {
        switch (event) {
            case 'Default':
                this.listProduct.sort((a, b) => {
                    return a.productId - b.productId;
                });
                break;
            case 'Latest':
                this.listProduct.sort((a, b) => {
                    return b.productId - a.productId;
                });
                break;
            // case 'Popularity':
            //   this.listProduct.sort((a, b) => {
            //     return a.priceOutput - b.priceOutput;
            //   })
            // break;
            case 'Price: low to high':
                this.listProduct.sort((a, b) => {
                    return a.priceOutput - b.priceOutput;
                });
                break;
            case 'Price: high to low':
                this.listProduct.sort((a, b) => {
                    return b.priceOutput - a.priceOutput;
                });
                break;
        }
    }
    triggerModal(content: any) {
        this.modalService
            .open(content, { windowClass: 'productsQuickView', centered: true })
            .result.then(
                (res) => {
                    this.closeModal = `Closed with: ${res}`;
                },
                (res) => {
                    this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
                }
            );
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    shopGrid: number = 1;
}
