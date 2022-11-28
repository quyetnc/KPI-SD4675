import { CategoryService } from './../../../../api/services/category.service';
import { ECommerceService } from './../../../../api/services/e-commerce.service';
import { CommonService } from './../../../../common/services/common.service';
import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'app/api/models';
import { CartService } from 'app/cart.serviceclient';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-compare-product',
  templateUrl: './compare-product.component.html',
  styleUrls: ['./compare-product.component.scss']
})
export class CompareProductComponent implements OnInit {
  listProduct = [] as Array<Product>;
  listProductIdCompare = [] as Array<Number>
  listCategory = [] as Array<Category>;
  apiUrl: string;
  constructor(private _commonService: CommonService, private _eCommerceService: ECommerceService, private _cartService: CartService, private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.apiUrl = environment.apiUrl + '/';
    // this._categoryService.apiCategoryListCategoryGet$Json().subscribe((rs) => {
    //   this.listCategory = rs.success ? rs.data : [];
    // })
    this._eCommerceService.apiECommerceListProductGet$Json().subscribe((rs) => {
      this.listProduct = rs.data;
      !rs.success && this._commonService.sweetAlert("Thông báo", "Lấy thông tin sản phẩm lỗi", rs.success);
      this.listProductIdCompare = rs.success ? this._cartService.getItemsCompare() : [];
    })
  }
  filterValue(value, key) {
    return this.listProduct.find(function (v) { return v.productId === value })?.[key];
  }
  removeProductFromCompart(productId: number) {
    this._commonService.sweetAlertConfirm("Thông báo", "Bạn chắc là muốn xóa sản phẩm này ra khỏi so sánh chứ?", false).then((value) => {
      value.isConfirmed && this._cartService.deleteFromCompare(productId);
    })
  }
  addToCart(productId: number) {
    this._cartService.addToCart(productId);
    // this.notifierService.notify('success', 'Your product added to the cart!');
  }
  getCategoryNameById(categoryId: number) {
    return this.listCategory.find(x => x.categoryId == categoryId)?.name;
  }
}
