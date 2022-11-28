import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let InfoOrderOfCustomerComponent = class InfoOrderOfCustomerComponent {
    constructor(_modalService, _commonService, _orderService) {
        this._modalService = _modalService;
        this._commonService = _commonService;
        this._orderService = _orderService;
        this.listOrder = [];
    }
    ngOnInit() {
    }
    openDialog(CustomerId) {
        console.log("CustomerId", CustomerId);
        // this.resetObject();
        this._orderService.apiOrderGetListOrderOfCustomerPost$Json({ body: { customerId: CustomerId } }).subscribe((rs) => {
            this.listOrder = rs.data;
            !rs.success && this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
        });
        this.ngModalRef = this._modalService.open(this.OrderOfCustomerModal, {
            scrollable: true,
            centered: true,
            size: 'xl' // size: 'xs' | 'sm' | 'lg' | 'xl'
        });
    }
    closeModalAlert(modal) {
        modal.close("Accept click");
    }
    openDetailOrder(orderId) {
        this.InfoDetailOrderOfCustomerModalSelector.openDialog(orderId);
    }
    convertFormatVND(input) {
        return input.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
    }
};
__decorate([
    ViewChild("OrderOfCustomerModal", { static: false })
], InfoOrderOfCustomerComponent.prototype, "OrderOfCustomerModal", void 0);
__decorate([
    ViewChild("InfoDetailOrderOfCustomer")
], InfoOrderOfCustomerComponent.prototype, "InfoDetailOrderOfCustomerModalSelector", void 0);
InfoOrderOfCustomerComponent = __decorate([
    Component({
        selector: 'app-info-order-of-customer',
        templateUrl: './info-order-of-customer.component.html',
        styleUrls: ['./info-order-of-customer.component.scss']
    })
], InfoOrderOfCustomerComponent);
export { InfoOrderOfCustomerComponent };
//# sourceMappingURL=info-order-of-customer.component.js.map