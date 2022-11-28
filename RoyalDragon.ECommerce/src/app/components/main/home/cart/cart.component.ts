import { AuthenticationService } from './../../../../auth/service/authentication.service';
import { CommonService } from './../../../../common/services/common.service';
import { ECommerceService } from './../../../../api/services/e-commerce.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'app/api/models';
import { environment } from 'environments/environment';
// get cart_product on client
import { CartItem, CartService } from '../../../../cart.serviceclient';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products = this._cartService.getItems();
  total = 0;
  // total = this._cartService.getTotal();
  apiUrl: string;
  listProduct = [] as Array<Product>;
  listProductCart: CartItem[];
  constructor(
    private _cartService: CartService, private _eCommerceService: ECommerceService, private _commonService: CommonService,
    private _authenticationService: AuthenticationService
  ) {
    this.fetchAllProduct();
  }
  ngOnInit(): void {
    this.apiUrl = environment.apiUrl + '/';
    this.sumTotalBill();

  }
  fetchAllProduct() {
    this._eCommerceService.apiECommerceListProductGet$Json().subscribe(rs => {
      if (rs.success) {
        this.listProduct = rs.data;
        this.loadCart();
      }
      else {
        console.log("Lấy danh sách sản phẩm lỗi");
      }
    })
  }
  async loadCart() {
    let total = 0;
    this._cartService.getItems().forEach(e => {
      total += this.filterValue(e.productId, 'priceOutput') * e.quantity
    });
    this.total = total;
    this.listProductCart = this._cartService.getItems();
  }
  filterValue(value, key) {
    return this.listProduct.find(function (v) { return v.productId === value })?.[key];
  }
  onChange(value, productId: number) {
    this._cartService.updateToCart(productId, parseInt(value))
    this.sumTotalBill();
  }
  deleteProductCart(productId: number) {
    this._commonService.sweetAlertConfirm("Thông báo", "Bạn có chắc là muốn xóa sản phẩm này ra khỏi giỏ hàng không?", false).then((rs) => {
      if (rs.isConfirmed) {
        this._cartService.deleteFromCart(productId);
        this.sumTotalBill();
      }
    });
  }
  sumTotalBill() {
    let total = 0;
    this.listProductCart?.forEach(e => {
      console.log(`eee`,this.filterValue(e.productId, 'priceOutput'))
      total += this.filterValue(e.productId, 'priceOutput') * e.quantity
    });
    this.total = total;
    console.log(total, "total");
  }
  goToCheckout() {
    const currentUser = this._authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    // !isLoggedIn ? 
  }
}
