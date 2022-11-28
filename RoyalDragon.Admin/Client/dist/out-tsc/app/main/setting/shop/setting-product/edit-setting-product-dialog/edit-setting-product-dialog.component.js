import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { environment } from 'environments/environment';
let EditSettingProductDialogComponent = class EditSettingProductDialogComponent {
    constructor(_modalService, _commonService, _productService, _httpService) {
        this._modalService = _modalService;
        this._commonService = _commonService;
        this._productService = _productService;
        this._httpService = _httpService;
        this.resetDataPreviousPage = new EventEmitter();
        this.isCreateCustomer = true;
    }
    ngOnInit() {
    }
    openDialog(productData) {
        this.productData = productData;
        this.avatarImage = this.productData.bannerImg == null ? "assets/images/portrait/small/avatar-s-11.jpg" : (environment.apiUrl + "/" + this.productData.bannerImg);
        this.ngModalRef = this._modalService.open(this.EditSetingProductDialogModal, {
            scrollable: true,
            centered: true,
            size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
        });
    }
    save() {
        console.log(this.productData.bannerImg);
        let dataSettingRequest = this.mapDataSetingForProduct();
        this._productService.apiProductUpdateSettingProductPost$Json({
            body: {
                productSetting: dataSettingRequest,
                userId: 0
            },
        }).subscribe((rs) => {
            this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            rs.success && this.ngModalRef.close();
            rs.success && this.resetDataPreviousPage.emit(true);
        });
    }
    mapDataSetingForProduct() {
        return {
            bannerImg: this.productData.bannerImg,
            isBanner: this.productData.isBanner,
            isFeather: this.productData.isFeather,
            isSpecialOffer: this.productData.isSpecialOffer,
            isPopular: this.productData.isPopular,
            productId: this.productData.productId
        };
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
    uploadImage(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event) => {
                this.avatarImage = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        if (event.target.files.length === 0) {
            return;
        }
        let fileToUpload = event.target.files[0];
        const formData = new FormData();
        formData.append("file", fileToUpload, fileToUpload.name);
        this._httpService.post(`${environment.apiUrl}/api/Upload/Upload`, formData).subscribe((rs) => {
            console.log(rs);
            if (rs["success"]) {
                this.uploadFileModel = rs["data"];
                this.productData.bannerImg = this.uploadFileModel.pathSave;
            }
        }, (err) => {
            this._commonService.sweetAlertUnknownError();
        });
    }
};
__decorate([
    ViewChild("EditSetingProductDialogModal", { static: false })
], EditSettingProductDialogComponent.prototype, "EditSetingProductDialogModal", void 0);
__decorate([
    Output()
], EditSettingProductDialogComponent.prototype, "resetDataPreviousPage", void 0);
EditSettingProductDialogComponent = __decorate([
    Component({
        selector: 'app-edit-setting-product-dialog',
        templateUrl: './edit-setting-product-dialog.component.html',
        styleUrls: ['./edit-setting-product-dialog.component.scss']
    })
], EditSettingProductDialogComponent);
export { EditSettingProductDialogComponent };
//# sourceMappingURL=edit-setting-product-dialog.component.js.map