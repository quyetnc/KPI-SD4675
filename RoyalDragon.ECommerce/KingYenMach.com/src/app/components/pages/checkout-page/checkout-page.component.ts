import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.serviceclient';
import { environment } from '../../../../environments/environment';
import { CartItem } from 'app/cart.serviceclient';
import { Product } from 'app/api/models';
import { ECommerceService } from 'app/api/services/e-commerce.service';
import { CustomerService } from 'app/api/services';

@Component({
	selector: 'app-checkout-page',
	templateUrl: './checkout-page.component.html',
	styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

	private readonly notifier: NotifierService;
    productsUrl: any = [];
    products = this._cartService.getItems();
    total = 0;
    public checkoutForm: UntypedFormGroup;
    listProduct = [] as Array<Product>;
    listProductCart: CartItem[];
    // total = this.cartService.getTotal();

    constructor(
        private formBuilder: UntypedFormBuilder,
        private _cartService: CartService,
        private http: HttpClient,
        notifierService: NotifierService,
        private _formBuilder: FormBuilder,
        private _eCommerceService: ECommerceService,
        private _customerService: CustomerService,
    ) {
        this.checkoutForm = this.formBuilder.group({
            fullname: ['', Validators.required],
            phone: ['', [Validators.required]],
            address: ['', [Validators.required, Validators.minLength(5)]],
        });
        this.notifier = notifierService;
        this.fetchAllProduct();
    }

    ngOnInit(){
        this.sumTotalBill();
    }
    get f() {
        return this.checkoutForm.controls;
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
    sumTotalBill() {
        let total = 0;
        this.listProductCart?.forEach(e => {
            total += this.filterValue(e.productId, 'priceOutput') * e.quantity
        });
        this.total = total;
    }
    onSubmit(): void {
        this._customerService.apiCustomerCreateOrderFromCustomerPost$Json({
            body: {
                customerId: JSON.parse(localStorage.getItem('currentUser')).customerId,
                listProductOrder: this.listProductCart,
                noteCustomer: this.f.address.value+'-'+this.f.phone.value,
                userId: 0,
            }
        }).subscribe(rs=>{
            if(rs.success){
                this.products = this._cartService.clearCart();
                this.notifier.notify('success', rs.message);
            }else {
                this.notifier.notify('error', rs.message);
            }
        })
        // Process checkout data here
        this.products = this._cartService.clearCart();
        this.checkoutForm.reset();
    }

}