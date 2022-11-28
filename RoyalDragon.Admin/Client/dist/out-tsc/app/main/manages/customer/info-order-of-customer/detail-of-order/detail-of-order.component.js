import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let DetailOfOrderComponent = class DetailOfOrderComponent {
    constructor(_modalService, _commonService, _orderService) {
        this._modalService = _modalService;
        this._commonService = _commonService;
        this._orderService = _orderService;
        this.listItemOrder = [];
    }
    ngOnInit() {
    }
    openDialog(OrderId) {
        this._orderService.apiOrderDetailOrderGet$Json({ OrderId: OrderId }).subscribe((rs) => {
            this.listItemOrder = rs.data;
            !rs.success && this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            this.ngModalRef = this._modalService.open(this.OrderDetailOfCustomerModal, {
                scrollable: true,
                centered: true,
                size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
            });
        });
    }
    closeModalAlert(modal) {
        modal.close("Accept click");
    }
    convertFormatVND(input) {
        return input.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
    }
};
__decorate([
    ViewChild("OrderDetailOfCustomerModal", { static: false })
], DetailOfOrderComponent.prototype, "OrderDetailOfCustomerModal", void 0);
DetailOfOrderComponent = __decorate([
    Component({
        selector: 'app-detail-of-order',
        templateUrl: './detail-of-order.component.html',
        styleUrls: ['./detail-of-order.component.scss']
    })
], DetailOfOrderComponent);
export { DetailOfOrderComponent };
//# sourceMappingURL=detail-of-order.component.js.map