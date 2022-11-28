import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { environment } from 'environments/environment';
let AddEditCategoryDialogComponent = class AddEditCategoryDialogComponent {
    constructor(_modalService, _commonService, _categoryService, _httpService) {
        this._modalService = _modalService;
        this._commonService = _commonService;
        this._categoryService = _categoryService;
        this._httpService = _httpService;
        this.resetDataPreviousPage = new EventEmitter();
        this.isCreateCustomer = true;
    }
    ngOnInit() {
    }
    openDialog(CategoryId) {
        this.avatarImage = "assets/images/portrait/small/avatar-s-11.jpg";
        this.isCreateCustomer = true;
        this.resetObject();
        CategoryId > 0 && this._categoryService.apiCategoryGetCategoryGet$Json({ CategoryId: CategoryId }).subscribe((rs) => {
            if (rs.success) {
                this.categoryData = rs.data;
                this.avatarImage = this.categoryData.image == null ? "assets/images/portrait/small/avatar-s-11.jpg" : (environment.apiUrl + "/" + this.categoryData.image);
                this.isCreateCustomer = false;
            }
        });
        this.ngModalRef = this._modalService.open(this.AddEditCategoryDialogModal, {
            scrollable: true,
            centered: true,
            size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
        });
    }
    resetObject() {
        this.categoryData = {
            name: "",
            image: "",
            slug: "slug",
            createOn: "1999-09-25",
            isActive: true,
        };
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
            }
        }, (err) => {
            this._commonService.sweetAlertUnknownError();
        });
    }
    save() {
        this.categoryData.image = (this.categoryData.image == null || this.categoryData.image == "") ? this.uploadFileModel?.pathSave ?? "" : this.categoryData.image;
        this.categoryData.slug = "slug";
        this.categoryData.isActive = true;
        this.isCreateCustomer ? this._categoryService.apiCategoryCreateCategoryPost$Json({
            body: {
                category: this.categoryData,
                userId: 0
            },
        }).subscribe((rs) => {
            this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            rs.success && this.ngModalRef.close();
            rs.success && this.resetDataPreviousPage.emit(true);
        }) : this._categoryService.apiCategoryUpdateCategoryPost$Json({
            body: {
                category: this.categoryData,
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
    ViewChild("AddEditCategoryDialogModal", { static: false })
], AddEditCategoryDialogComponent.prototype, "AddEditCategoryDialogModal", void 0);
__decorate([
    Output()
], AddEditCategoryDialogComponent.prototype, "resetDataPreviousPage", void 0);
AddEditCategoryDialogComponent = __decorate([
    Component({
        selector: 'app-add-edit-category-dialog',
        templateUrl: './add-edit-category-dialog.component.html',
        styleUrls: ['./add-edit-category-dialog.component.scss']
    })
], AddEditCategoryDialogComponent);
export { AddEditCategoryDialogComponent };
//# sourceMappingURL=add-edit-category-dialog.component.js.map