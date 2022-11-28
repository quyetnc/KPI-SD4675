import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/api/models';
import { ECommerceService } from 'app/api/services';
import { environment } from 'environments/environment';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'app/cart.serviceclient';

@Component({
  selector: 'app-category-product-detail',
  templateUrl: './category-product-detail.component.html',
  styleUrls: ['./category-product-detail.component.scss']
})
export class CategoryProductDetailComponent implements OnInit {
  categorySlug: string = "";
  env: string = '';
  listProduct: Array<Product> = [];
  categoryId: number = 0;
  categoryName: string = "";
  apiUrl: string;

  constructor(private _router: ActivatedRoute, private router: Router, private _ecommerceService: ECommerceService, private _cartService: CartService, private notifierService: NotifierService) {
    this.env = environment.apiUrl + '/';
    let categorySlug = this._router.snapshot.params["slug"];
    // Nếu path bị sai phải rewrite lại
    if (categorySlug != "") {
      this.categorySlug = categorySlug;
    }
    else
      this.router.navigate(['/notfound'], { skipLocationChange: true });
  }

  async ngOnInit(): Promise<void> {
    this.apiUrl = environment.apiUrl + '/';
    await this.fetchCategoryProductDetail(this.categorySlug);
  }
  fetchCategoryProductDetail(categorySlug: string) {
    this._ecommerceService.apiECommerceListProductByCategorySlugGet$Json({ CategorySlug: categorySlug }).subscribe((rs) => {
      if (rs.success) {
        this.listProduct = rs.data.listProduct;
        this.categoryId = rs.data.categoryId;
        this.categoryName = rs.data.categoryName;

        let url: string = this._router.snapshot.params["slug"]; 
      }
      else {
        this.router.navigate(['/notfound'], { skipLocationChange: true });
      }
    })
  }
  shopGrid: number = 1;
  addToCart(productId: number) {
    this._cartService.addToCart(productId);
    // this.notifierService.notify('success', 'Your product added to the cart!');
  }
  mySelectHandler(event: any) {
    switch (event) {
        case 'Mặc định':
            this.listProduct.sort((a, b) => {
                return a.productId - b.productId;
            });
            break;
        case 'Mới nhất':
            this.listProduct.sort((a, b) => {
                return b.productId - a.productId;
            });
            break;
        // case 'Popularity':
        //   this.listProduct.sort((a, b) => {
        //     return a.priceOutput - b.priceOutput;
        //   })
        // break;
        case 'Giá: Cao đến thấp':
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
}
