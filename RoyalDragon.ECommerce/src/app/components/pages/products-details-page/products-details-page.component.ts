import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Product, ProductDetailResponse } from 'app/api/models';
import { ECommerceService, ReviewService } from 'app/api/services';
import { environment } from 'environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SeoService } from 'app/common/services/seo.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'app/cart.serviceclient';
@Component({
	selector: 'app-products-details-page',
	templateUrl: './products-details-page.component.html',
	styleUrls: ['./products-details-page.component.scss']
})
export class ProductsDetailsPageComponent implements OnInit {
	private productId: number = 0;
	public star: number = 0;
	public isShowReview: boolean = false;
	public env: string = '';
	public productDetail: ProductDetailResponse = {};
	private ratingForm: UntypedFormGroup;
	constructor(private _router: ActivatedRoute, private router: Router, private _ecommerceService: ECommerceService, private _seoService: SeoService, private _reviewService: ReviewService,
		private _formBuilder: UntypedFormBuilder,
		private notifierService: NotifierService,
		private _cartService: CartService,
	) {
		this.env = environment.apiUrl + '/';
		let url = this._router.snapshot.params["productSlug"];
		//Check if url endsWith .html
		if (url.endsWith(".html")) {
			let productId = url.split("-")[url.split("-").length - 1].replace(".html", "").replace("p", "");
			// Nếu path bị sai phải rewrite lại
			if (!isNaN(productId)) {
				this.productId = parseInt(productId);
			}
			else
				this.router.navigate(['/notfound'], { skipLocationChange: true });
		} else {
			this.router.navigate(['/notfound'], { skipLocationChange: true });
		}
	}

	async ngOnInit(): Promise<void> {
		await this.fetchProductDetail(this.productId);
		await this.checkIsShowReview(this.productId);
		this.ratingForm = this._formBuilder.group({
			accept: [null, Validators.required],
			star: [5, Validators.required],
			comment: [null, Validators.required],
			productId: [this.productId, Validators.required],
		});
	}
	async checkIsShowReview(productId: number): Promise<void> {
		this._reviewService.apiReviewShowReviewPost$Json({
			body: {
				productId: productId
			}
		}).subscribe(res => {
			this.isShowReview = res.data;
		});
	}
	async fetchProductDetail(productId: number): Promise<void> {
		await this._ecommerceService.apiECommerceProductDetailGet$Json({ ProductId: productId })
			.subscribe(res => {
				if (res.success) {
					this.productDetail = res.data;
					let url: string = this._router.snapshot.params["productSlug"];
					if (url != res.data.productDetail.slug) {
						location.href = "/" + res.data.productDetail.slug;
					}
					this.star = res.data.reviews.map(x => x.star).reduce((acc, v, i, a) => (acc + v / a.length), 0);
					this.fRenderClassRating();
					this._seoService.createMeta(res.data.productDetail.productName, this.env + res.data.productDetail.img, "/" + res.data.productDetail.slug);
					this._seoService.createLinkForCanonicalURL();
				}
				else {
					this.router.navigate(['/notfound'], { skipLocationChange: true });
				}
			});
	}
	public ratingHtml: string = '';
	// <!-- star = 1.5 , i 3-->
	fRenderClassRating(): void {
		let isStarHalf: boolean = false;
		for (let i = 1; i <= 5; i++) {
			if (i <= this.star)
				this.ratingHtml += '<i _ngcontent-kingyenmach-c201 class="fas fa-star checked"></i>';
			else {
				//Nếu là số chẳn
				if (Number.isInteger(this.star)) {
					this.ratingHtml += '<i _ngcontent-kingyenmach-c201 class="fas fa-star"></i>';
				} else {
					if (isStarHalf == false) {
						isStarHalf = true;
						this.ratingHtml += '<i _ngcontent-kingyenmach-c201 class="fas fa-star-half-alt checked"></i>';
					}
					else
						this.ratingHtml += '<i _ngcontent-kingyenmach-c201 class="fas fa-star"></i>';
				}
			}
		}
	}
	productsSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>",
		]
	}

	// Input Counter
	inputnumber = 1;
	plus() {
		this.inputnumber = this.inputnumber + 1;
	}
	minus() {
		(this.inputnumber != 1)
		{
			this.inputnumber = this.inputnumber - 1;
		}
	}

	onSubmit() {
		if (this.ratingForm.invalid) {
			return;
		}
		if(localStorage.getItem('token') == null) {
			this.notifierService.notify("error","Bạn cần đăng nhập để đánh giá");
			return;
		}
		this._reviewService.apiReviewCreateReviewPost$Json({
			body: {
				review: this.ratingForm.value
			}
		}).subscribe(res => {
			console.log("res", res);
			if(res.success){
				this.productDetail.reviews.push(res.data);
				this.notifierService.notify("sucess",res.message);
				this.ratingForm.reset();
			}else {
				this.notifierService.notify("error",res.message);
			}
			

		})

	}
	addToCart(product: Product, quantity: number): void {
		this._cartService.addToCart(product.productId, quantity);
	}
}