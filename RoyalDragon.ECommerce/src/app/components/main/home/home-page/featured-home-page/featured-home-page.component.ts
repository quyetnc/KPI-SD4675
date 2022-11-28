import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'app/api/models';
import { CartService } from 'app/cart.serviceclient';
import { CommonService } from 'app/common/services/common.service';
import { environment } from 'environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-home-page',
  templateUrl: './featured-home-page.component.html',
  styleUrls: ['./featured-home-page.component.scss']
})
export class FeaturedHomePageComponent implements OnInit {
  @Input() listFeather = [] as Array<Product>;
  public env: string = '';
  constructor(private _cartService: CartService, public _commonService: CommonService,
    public router: Router
  ) { this.env = environment.apiUrl + '/'; }

  ngOnInit(): void {

    console.log(this.router.url);

  }
  showImage(img: string): string {
    if (img == null) {
      return '';
    }
    return this.env + img.replace('\\', '/');
  }
  addToWishlist(product: Product, quantity: number): void {
    this._cartService.addToWishlist(product, quantity);
  }
  addToCompare(product: Product): void {
    this._cartService.addToCompare(product.productId);
  }
  addToCart(product: Product, quantity: number): void {
    this._cartService.addToCart(product.productId, quantity);
  }

  productsSlides: OwlOptions = {
    rtl: true,
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
    rtl: true,
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