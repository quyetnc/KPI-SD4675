import { CreateOrderFromCustomer } from './../../../../api/models/create-order-from-customer';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Customer, Product } from 'app/api/models';
import { CustomerService, ProductService } from 'app/api/services';
import { CommonService } from 'app/common/common.service';
import { CreateOrderFromCustomerModel } from 'app/api/models/create-order-from-customer-model';

@Component({
  selector: 'app-order-by-customer',
  templateUrl: './order-by-customer.component.html',
  styleUrls: ['./order-by-customer.component.scss']
})
export class OrderByCustomerComponent implements OnInit {

  ngModalRef: NgbModalRef;
  @ViewChild("OrderByCustomerModal", { static: false })
  OrderByCustomerModal: any;
  customerData: Customer;
  customerIdSelected: number;
  isCreateCustomer: boolean = true;
  listProduct = [] as Product[]
  listProductFilter = [] as Product[]
  totalBill = "";
  noteCustomer = "Khách quen";
  public items = [{ itemId: '', productId: '', itemQuantity: '1' }];

  public item = {
    productId: '',
    itemQuantity: ''
  };
  constructor(private _modalService: NgbModal, private _commonService: CommonService, private _customerService: CustomerService, private _productService: ProductService) { }

  ngOnInit(): void {
  }

  openDialog(CustomerId: number) {
    this.items = [{ itemId: '', productId: '', itemQuantity: '1' }]
    this.customerIdSelected = CustomerId;
    this._productService.apiProductListProductGet$Json().subscribe((rs) => {
      if (rs.success) {
        this.listProduct = rs.data;
        this.listProductFilter = rs.data;
      }
      else
        this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
    })
    this.ngModalRef = this._modalService.open(
      this.OrderByCustomerModal,
      {
        scrollable: true,
        centered: true,
        size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
      }
    );
  }
  addItem() {
    this.items.push({
      itemId: '',
      productId: '',
      itemQuantity: '1'
    });
  }
  deleteItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items.indexOf(this.items[i]) === id) {
        this.items.splice(i, 1);
        break;
      }
    }
    this.caculateTotalBill();
  }
  getValuePrice(productId) {
    return (productId == null || productId == "") ? "" : (this.listProduct.find(x => x.productId == productId).priceOutput.toLocaleString('en-US', { style: 'currency', currency: 'VND' }))
  }
  closeModalAlert(modal) {
    this._commonService
      .sweetAlertConfirm("Close", "Bạn có chắc là muốn đóng tác vụ này?")
      .then((confirm) => {
        if (confirm.value) {
          modal.close("Accept click");
        }
      });
  }
  caculateTotalBill() {
    this.listProductFilter = this.listProduct.filter(x => this.items.filter(z => parseInt(z.productId) == x.productId).length == 0);
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].productId);

      if (this.items[i].itemQuantity != "" && this.items[i].productId != "" && this.items[i].productId != null)
        total += (parseInt(this.items[i].itemQuantity) * this.listProduct.find(x => x.productId == parseInt(this.items[i].productId)).priceOutput)
    }
    this.totalBill = total.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
  }
  save() {
    if (this.totalBill != "₫NaN" && this.totalBill != "" && this.totalBill != null && this.totalBill != "₫0") {

      let listProductOrder = [] as Array<CreateOrderFromCustomerModel>;
      for (let i = 0; i < this.items.length; i++) {
        listProductOrder.push({ productId: parseInt(this.items[i].productId), quantity: (parseInt(this.items[i].itemQuantity)) });
      }
      this._customerService.apiCustomerCreateOrderFromCustomerPost$Json({
        body: {
          customerId: this.customerIdSelected,
          listProductOrder: listProductOrder,
          noteCustomer: this.noteCustomer,
          userId: 0
        }
      }).subscribe((rs) => {
        this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
        rs.success && this.ngModalRef.close();
      })
    }
    else {
      this._commonService.sweetAlert("Thông báo", "Thông tin đơn hàng chưa đúng, yêu cầu xem lại", false)
    }
  }
}
