import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import * as snippet from 'app/main/tables/datatables/datatables.snippetcode';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let CostComponent = class CostComponent {
    constructor(_costService, _categoryService, modalService, fb, _httpService, _commonService) {
        this._costService = _costService;
        this._categoryService = _categoryService;
        this.modalService = modalService;
        this.fb = fb;
        this._httpService = _httpService;
        this._commonService = _commonService;
        this.tempData = [];
        this.selected = [];
        this.listCost = [];
        this.product = {}; //Single Cost Selected or Create Cost
        this.basicSelectedOption = 10;
        this.ColumnMode = ColumnMode;
        this.expanded = {};
        this.editingName = {};
        this.editingStatus = {};
        this.editingAge = {};
        this.editingSalary = {};
        this.chkBoxSelected = [];
        this.SelectionType = SelectionType;
        this.isCreate = false;
        // snippet code variables
        this._snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
        this._snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
        this._snippetCodeRowDetails = snippet.snippetCodeRowDetails;
        this._snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
        this._snippetCodeResponsive = snippet.snippetCodeResponsive;
        this._snippetCodeMultilangual = snippet.snippetCodeMultilangual;
        this._unsubscribeAll = new Subject();
        this.avatarImage = "assets/images/portrait/small/avatar-s-11.jpg";
    }
    uploadImage(event) {
    }
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.product = { ...selected[0] };
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    onActivate(event) {
        // console.log('Activate Event', event);
    }
    customChkboxOnSelect({ selected }) {
        this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
        this.chkBoxSelected.push(...selected);
    }
    ngOnInit() {
        this.apiUrl = environment.apiUrl + "/";
        this.initForm();
        this.fetchDataListCategorys();
        this.fetchDataListCosts();
        // content header
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
                        name: 'Sản phẩm',
                        isLink: false
                    }
                ]
            }
        };
    }
    initForm() {
        this.productForm = this.fb.group({
            productId: ["0", [Validators.required]],
            name: ["", [Validators.required, Validators.maxLength(200)]],
            shortDescription: ["", [Validators.maxLength(200)]],
            description: [""],
            img: [""],
            isSell: [true],
            priceInput: [0],
            quantity: [0],
            priceOutput: [0],
            categoryId: [0],
        });
    }
    fViewHistoryUpdateCost(productId) {
    }
    removeCost() {
    }
    resetForm() {
        this.product = {};
        this.productForm.controls["name"].patchValue("");
        this.productForm.controls["img"].patchValue("");
        this.productForm.controls["shortDescription"].patchValue("");
        this.productForm.controls["description"].patchValue("");
        this.productForm.controls["productId"].patchValue(0);
        this.productForm.controls["priceInput"].patchValue(0);
        this.productForm.controls["priceOutput"].patchValue(0);
    }
    validate(param) {
        return (this.productForm.value[param] != null &&
            this.productForm.value[param] != "");
    }
    clearErrorMessage() {
        this.errorMessage = "";
    }
    afterCallApi(isSuccess, message) {
        if (isSuccess == true) {
            Swal.fire({
                icon: "success",
                title: "Thông báo",
                text: this.isCreate ? "Thêm thành công!" : "Cập nhật thành công",
                customClass: {
                    confirmButton: "btn btn-success",
                },
            });
            this.modalService.dismissAll();
            this.resetForm();
        }
        else {
            if (message) {
                Swal.fire({
                    icon: "error",
                    title: this.isCreate ? "Không thể tạo!" : "Không thể cập nhật",
                    text: message,
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                });
            }
        }
    }
    createOrUpdateCost() {
    }
    modalOpenSLCIM(modalSLCIM, isCreate) {
        this.isCreate = isCreate;
        this.avatarImage = "assets/images/portrait/small/avatar-s-11.jpg";
        if (isCreate) {
            this.resetForm();
        }
        else {
            console.log("this.product", this.product);
            this.productForm.patchValue(this.product);
        }
        this.modalService.open(modalSLCIM, {
            scrollable: true,
            centered: true,
            size: "lg",
        });
    }
    fetchDataListCosts() {
        this._costService.apiCostListCostGet$Json$Response().subscribe((result) => {
            if (result.body.success)
                this.listCost = [...result.body.data];
            else
                Swal.fire({
                    icon: "error",
                    title: "Lỗi!",
                    text: "Lỗi xảy ra khi hiển thị danh sách sản phẩm!!!",
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                });
        }, (err) => {
            console.dir(err);
        });
    }
    fetchDataListCategorys() {
    }
};
__decorate([
    ViewChild("modalShowHistory", { static: false })
], CostComponent.prototype, "modalShowHistory", void 0);
__decorate([
    ViewChild(DatatableComponent)
], CostComponent.prototype, "table", void 0);
__decorate([
    ViewChild('tableRowDetails')
], CostComponent.prototype, "tableRowDetails", void 0);
CostComponent = __decorate([
    Component({
        selector: 'app-cost',
        templateUrl: './cost.component.html',
        styleUrls: ['./cost.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], CostComponent);
export { CostComponent };
//# sourceMappingURL=cost.component.js.map