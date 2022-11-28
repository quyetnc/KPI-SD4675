import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
let AddEditCustomerDialogComponent = class AddEditCustomerDialogComponent {
    constructor(_modalService, _commonService, _customerService) {
        this._modalService = _modalService;
        this._commonService = _commonService;
        this._customerService = _customerService;
        this.resetDataPreviousPage = new EventEmitter();
        this.isCreateCustomer = true;
    }
    ngOnInit() {
    }
    openDialog(CustomerId) {
        this.isCreateCustomer = true;
        this.resetObject();
        CustomerId > 0 && this._customerService.apiCustomerGetCustomerGet$Json({ CustomerId: CustomerId }).subscribe((rs) => {
            if (rs.success) {
                this.customerData = rs.data;
                this.isCreateCustomer = false;
            }
        });
        this.ngModalRef = this._modalService.open(this.AddEditCustomerDialogModal, {
            scrollable: true,
            centered: true,
            size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
        });
    }
    resetObject() {
        this.customerData = {
            address: null,
            createBy: "",
            createByUserId: 0,
            createOn: "1999-09-25",
            customerId: 0,
            fullName: null,
            isActive: true,
            isBadCustomer: false,
            order: null,
            phone: null,
            reasonBad: null,
        };
    }
    save() {
        this.isCreateCustomer ? this._customerService.apiCustomerCreateCustomerPost$Json({
            body: {
                customer: this.customerData,
                userId: 0
            },
        }).subscribe((rs) => {
            this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            rs.success && this.ngModalRef.close();
            rs.success && this.resetDataPreviousPage.emit(true);
        }) : this._customerService.apiCustomerUpdateCustomerPost$Json({
            body: {
                customer: this.customerData,
                userId: 0
            },
        }).subscribe((rs) => {
            this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            rs.success && this.ngModalRef.close();
            rs.success && this.resetDataPreviousPage.emit(true);
        });
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
};
__decorate([
    ViewChild("AddEditCustomerDialogModal", { static: false })
], AddEditCustomerDialogComponent.prototype, "AddEditCustomerDialogModal", void 0);
__decorate([
    Output()
], AddEditCustomerDialogComponent.prototype, "resetDataPreviousPage", void 0);
AddEditCustomerDialogComponent = __decorate([
    Component({
        selector: 'app-add-edit-customer-dialog',
        templateUrl: './add-edit-customer-dialog.component.html',
        styleUrls: ['./add-edit-customer-dialog.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], AddEditCustomerDialogComponent);
export { AddEditCustomerDialogComponent };
//# sourceMappingURL=add-edit-customer-dialog.component.js.map