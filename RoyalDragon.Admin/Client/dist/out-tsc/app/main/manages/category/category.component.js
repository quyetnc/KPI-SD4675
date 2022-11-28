import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { environment } from 'environments/environment';
let CategoryComponent = class CategoryComponent {
    constructor(_categoryService, _commonService) {
        this._categoryService = _categoryService;
        this._commonService = _commonService;
        this.ColumnMode = ColumnMode;
        this.isLoading = true;
        this.selected = [];
        this.listCategories = [];
    }
    ngOnInit() {
        this.apiUrl = environment.apiUrl + "/";
        this.fetchDataListCategories();
        this.contentHeader = {
            headerTitle: 'Danh sách sản phẩm',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Trang chủ',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Quản lý',
                        isLink: false,
                        link: '/'
                    },
                    {
                        name: 'Danh mục',
                        isLink: false
                    }
                ]
            }
        };
    }
    AddEditCategoryDialog(CategoryId) {
        this.AddEditCategoryDialogSelector.openDialog(CategoryId);
    }
    afterCallApi(isSuccess) {
        this.fetchDataListCategories();
    }
    fetchDataListCategories() {
        this.listCategories = [];
        this.isLoading = true;
        this._categoryService.apiCategoryListCategoryGet$Json().subscribe((result) => {
            if (result.success) {
                console.log(result.data);
                this.listCategories = [...result.data];
                this.isLoading = false;
            }
            else
                this._commonService.sweetAlert("Thông báo", result.message, result.success);
        }, (err) => {
            console.dir(err);
        });
    }
    hi() {
        console.log("123");
    }
    removeCategory(categoryId) {
        this._commonService.sweetAlertConfirm("Thông báo", "Bạn có chắc muốn xóa danh mục này không?", false).then((confirm) => {
            console.log(confirm, "confirm");
            confirm.isConfirmed && this._categoryService.apiCategoryDeleteCategoryDelete$Json({
                body: {
                    categoryId: categoryId
                }
            }).subscribe((rs) => {
                this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
                rs.success && this.fetchDataListCategories();
            });
        });
    }
};
__decorate([
    ViewChild("AddEditCategoryDialogModal")
], CategoryComponent.prototype, "AddEditCategoryDialogSelector", void 0);
__decorate([
    ViewChild('myTable')
], CategoryComponent.prototype, "myTable", void 0);
CategoryComponent = __decorate([
    Component({
        selector: 'app-category',
        templateUrl: './category.component.html',
        styleUrls: ['./category.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], CategoryComponent);
export { CategoryComponent };
//# sourceMappingURL=category.component.js.map