import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
let SettingProductComponent = class SettingProductComponent {
    constructor(_productService, _commonService) {
        this._productService = _productService;
        this._commonService = _commonService;
        this.ColumnMode = ColumnMode;
        this.isLoading = true;
        this.listProduct = [];
        this.product = {}; //Single Customer Selected or Create Customer 
    }
    ngOnInit() {
        this.fetchDataListProducts();
    }
    fetchDataListProducts() {
        this.listProduct = [];
        this.isLoading = true;
        this._productService.apiProductListProductGet$Json().subscribe((result) => {
            if (result.success) {
                this.listProduct = [...result.data];
                console.log("123");
                this.isLoading = false;
            }
            else
                this._commonService.sweetAlert("Thông báo", result.message, false);
        }, (err) => {
            console.dir(err);
        });
    }
    AddEditSettingProductDialog(dataProduct) {
        this.EditProductSettingDialogSelector.openDialog(dataProduct);
    }
    afterCallApi(isSuccess) {
        this.fetchDataListProducts();
    }
};
__decorate([
    ViewChild("EditProductSettingDialogModal")
], SettingProductComponent.prototype, "EditProductSettingDialogSelector", void 0);
__decorate([
    ViewChild('myTable')
], SettingProductComponent.prototype, "myTable", void 0);
SettingProductComponent = __decorate([
    Component({
        selector: 'app-setting-product',
        templateUrl: './setting-product.component.html',
        styleUrls: ['./setting-product.component.scss']
    })
], SettingProductComponent);
export { SettingProductComponent };
//# sourceMappingURL=setting-product.component.js.map