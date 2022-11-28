import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { Product } from 'app/api/models';
import { environment } from 'environments/environment';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'app/cart.serviceclient';
@Component({
    selector: 'app-featured-products',
    templateUrl: './featured-products.component.html',
    styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit, OnChanges {
	@Input() listProdcutsByFeatured : Array<Product> = [];
    public listProducts : Array<Product> = [];
	public env: string = '';
	private readonly notifier: NotifierService;
	constructor(
        public router: Router,
		private cartService: CartService,
		notifierService: NotifierService,
	) {
		this.env = environment.apiUrl + '/';
		this.notifier = notifierService;
	 }

    ngOnInit(): void {}
	ngOnChanges(changes: SimpleChanges): void {
		if(this.listProducts.length == 0) {
			this.listProducts = [...this.listProdcutsByFeatured];
		}
	}
	addToCart(product: Product) {
        this.cartService.addToCart(product.productId);
        this.notifier.notify('success', 'Your product added to the cart!');
    }
	addToWishlist(product: Product) {
		this.cartService.addToWishlist(product);
        this.notifier.notify('success', 'Your product added to the wishList!');
	}
    productsSlides: OwlOptions = {
		nav: false,
		margin: 30,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
    }
	featuredProductsSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			935: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
    }

}