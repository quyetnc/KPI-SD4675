import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let OrderByCustomerComponent = class OrderByCustomerComponent {
    constructor(_modalService, _commonService, _customerService, _productService) {
        this._modalService = _modalService;
        this._commonService = _commonService;
        this._customerService = _customerService;
        this._productService = _productService;
        this.isCreateCustomer = true;
        this.listProduct = [];
        this.listProductFilter = [];
        this.totalBill = "";
        this.noteCustomer = "Khách quen";
        this.items = [{ itemId: '', productId: '', itemQuantity: '1' }];
        this.item = {
            productId: '',
            itemQuantity: ''
        };
    }
    ngOnInit() {
    }
    openDialog(CustomerId) {
        this.items = [{ itemId: '', productId: '', itemQuantity: '1' }];
        this.customerIdSelected = CustomerId;
        this._productService.apiProductListProductGet$Json().subscribe((rs) => {
            if (rs.success) {
                this.listProduct = rs.data;
                this.listProductFilter = rs.data;
            }
            else
                this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
        });
        this.ngModalRef = this._modalService.open(this.OrderByCustomerModal, {
            scrollable: true,
            centered: true,
            size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
        });
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
        return (productId == null || productId == "") ? "" : (this.listProduct.find(x => x.productId == productId).priceOutput.toLocaleString('en-US', { style: 'currency', currency: 'VND' }));
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
                total += (parseInt(this.items[i].itemQuantity) * this.listProduct.find(x => x.productId == parseInt(this.items[i].productId)).priceOutput);
        }
        this.totalBill = total.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
    }
    save() {
        if (this.totalBill != "₫NaN" && this.totalBill != "" && this.totalBill != null && this.totalBill != "₫0") {
            let listProductOrder = [];
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
            });
        }
        else {
            this._commonService.sweetAlert("Thông báo", "Thông tin đơn hàng chưa đúng, yêu cầu xem lại", false);
        }
    }
};
__decorate([
    ViewChild("OrderByCustomerModal", { static: false })
], OrderByCustomerComponent.prototype, "OrderByCustomerModal", void 0);
OrderByCustomerComponent = __decorate([
    Component({
        selector: 'app-order-by-customer',
        templateUrl: './order-by-customer.component.html',
        styleUrls: ['./order-by-customer.component.scss']
    })
], OrderByCustomerComponent);
export { OrderByCustomerComponent };
//# sourceMappingURL=order-by-customer.component.js.map