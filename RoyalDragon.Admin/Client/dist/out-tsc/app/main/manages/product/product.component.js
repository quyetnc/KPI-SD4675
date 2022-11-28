import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { locale as german } from 'app/main/tables/datatables/i18n/de';
import { locale as english } from 'app/main/tables/datatables/i18n/en';
import { locale as french } from 'app/main/tables/datatables/i18n/fr';
import { locale as portuguese } from 'app/main/tables/datatables/i18n/pt';
import * as snippet from 'app/main/tables/datatables/datatables.snippetcode';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'environments/environment';
let ProductComponent = class ProductComponent {
    constructor(_datatablesService, _coreTranslationService, _productService, _categoryService, modalService, fb, _httpService, _commonService) {
        this._datatablesService = _datatablesService;
        this._coreTranslationService = _coreTranslationService;
        this._productService = _productService;
        this._categoryService = _categoryService;
        this.modalService = modalService;
        this.fb = fb;
        this._httpService = _httpService;
        this._commonService = _commonService;
        this.tempData = [];
        this.selected = [];
        this.listProductUpdateHistory = [];
        this.listProduct = [];
        this.listCategory = [];
        this.product = {}; //Single Product Selected or Create Product
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
        this.listAvatarImage = [];
        // snippet code variables
        this._snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
        this._snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
        this._snippetCodeRowDetails = snippet.snippetCodeRowDetails;
        this._snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
        this._snippetCodeResponsive = snippet.snippetCodeResponsive;
        this._snippetCodeMultilangual = snippet.snippetCodeMultilangual;
        this._unsubscribeAll = new Subject();
        this.avatarImage = "assets/images/portrait/small/avatar-s-11.jpg";
        this._coreTranslationService.translate(english, french, german, portuguese);
    }
    uploadImage(event) {
        if (event.target.files && event.target.files[0]) {
            for (var item in event.target.files) {
                this.listAvatarImage = event.target.files;
                
            }
            let reader = new FileReader();
            reader.onload = (event) => {
                this.avatarImage = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            this.imageFile = event.target.files[0];
        }
        if (event.target.files.length === 0) {
            return;
        }
        let fileToUpload = event.target.files;
        const formData = new FormData();
        for (let i = 0; i < fileToUpload.length; i++) {
            formData.append("file", fileToUpload[i], fileToUpload[i].name);
        }
        
        this._httpService.post(`${environment.apiUrl}/api/Upload/Upload`, formData).subscribe((rs) => {
            console.log(rs);
            if (rs["success"]) {
                this.uploadFileModel = rs["data"];
            }
            // this._commonService.sweetAlertResponse(rs);
        }, (err) => {
            this._commonService.sweetAlertUnknownError();
        });
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
        this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
            this.kitchenSinkRows = this.rows;
            this.exportCSVData = this.rows;
        });
        this.initForm();
        this.fetchDataListCategorys();
        this.fetchDataListProducts();
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
    fViewHistoryUpdateProduct(productId) {
        this._productService.apiProductHistoryUpdateProductGet$Json$Response({ ProductId: productId })
            .subscribe(res => {
            if (res.body.success) {
                this.modalService.open(this.modalShowHistory, {
                    scrollable: true,
                    centered: true,
                    size: "xl",
                });
                console.log("fViewHistoryUpdateProduct", res.body.data);
                this.listProductUpdateHistory = [...res.body.data];
            }
        });
    }
    removeProduct() {
        let arrProductId = this.selected.map(x => x.productId);
        Swal.fire({
            icon: "question",
            title: "Xác nhận",
            text: `Bạn chắc chắn xoá ${arrProductId.length} sản phẩm, Bạn đang nhầm với "Ngừng kinh doanh" những mặt hàng này?`,
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-default"
            }
        }).then(result => {
            if (result.isConfirmed) {
                let params = {
                    body: {
                        listProductId: arrProductId
                    },
                };
                this._productService.apiProductDeleteProductDelete$Json$Response(params).subscribe((rs) => {
                    Swal.fire({
                        icon: rs.body.success ? "success" : "error",
                        title: "Thông báo",
                        text: rs.body.message,
                        customClass: {
                            confirmButton: "btn btn-success",
                        },
                    });
                }, (err) => {
                    this.modalService.dismissAll();
                    this.resetForm();
                    console.dir(err);
                });
            }
        });
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
    createOrUpdateProduct() {
        this.productForm.controls["img"].patchValue(this.uploadFileModel?.pathSave ?? "");
        if (this.validate("priceInput") &&
            this.validate("name") &&
            this.validate("priceOutput") &&
            this.validate("img") &&
            this.imageFile != undefined &&
            this.imageFile != null) {
            this.clearErrorMessage();
            if (this.isCreate) {
                let params = {
                    body: {
                        product: this.productForm.value,
                        userId: 0
                    },
                };
                this._productService.apiProductAddProductPost$Json$Response(params).subscribe((rs) => {
                    
                    if (rs.body.success) {
                        this.listProduct.push(rs.body.data);
                        this.listProduct = [...this.listProduct];
                    }
                    this.afterCallApi(rs.body.success, rs.body.message);
                }, (err) => {
                    this.modalService.dismissAll();
                    this.resetForm();
                    console.dir(err);
                });
            }
            else {
                let params = {
                    body: {
                        product: this.productForm.value,
                        userId: 0
                    },
                };
                this._productService.apiProductUpdateProductPost$Json$Response(params).subscribe((rs) => {
                    if (rs.body.success) {
                        //Find index of specific object using findIndex method.    
                        let objIndex = this.listProduct.findIndex((obj => obj.productId == this.product.productId));
                        //Log object to Console.
                        console.log("Before update: ", this.listProduct[objIndex]);
                        //Update object's name property.
                        this.listProduct[objIndex].name = this.productForm.controls["name"].value;
                        this.listProduct[objIndex].shortDescription = this.productForm.controls["shortDescription"].value;
                        this.listProduct[objIndex].description = this.productForm.controls["description"].value;
                        this.listProduct[objIndex].img = this.productForm.controls["img"].value;
                        this.listProduct[objIndex].isSell = this.productForm.controls["isSell"].value;
                        this.listProduct[objIndex].priceInput = this.productForm.controls["priceInput"].value;
                        this.listProduct[objIndex].priceOutput = this.productForm.controls["priceOutput"].value;
                        this.listProduct = [...this.listProduct];
                    }
                    this.afterCallApi(rs.body.success, rs.body.message);
                }, (err) => {
                    this.modalService.dismissAll();
                    this.resetForm();
                    console.dir(err);
                });
            }
        }
        else {
            Swal.fire({
                icon: "error",
                title: this.isCreate ? "Thêm mới!" : "Cập nhật",
                text: "Vui lòng nhập đầy đủ thông tin!!!",
                customClass: {
                    confirmButton: "btn btn-success",
                },
            });
        }
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
            this.avatarImage = this.product.img == null ? "assets/images/portrait/small/avatar-s-11.jpg" : (environment.apiUrl + "/" + this.product.img);
        }
        this.modalService.open(modalSLCIM, {
            scrollable: true,
            centered: true,
            size: "lg",
        });
    }
    fetchDataListProducts() {
        this._productService.apiProductListProductGet$Json$Response().subscribe((result) => {
            if (result.body.success)
                this.listProduct = [...result.body.data];
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
        this.listCategory = [];
        this._categoryService.apiCategoryListCategoryGet$Json().subscribe((result) => {
            if (result.success)
                this.listCategory = [...result.data];
            else
                Swal.fire({
                    icon: "error",
                    title: "Lỗi!",
                    text: "Lỗi xảy ra khi load danh mục!!!",
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                });
        }, (err) => {
            console.dir(err);
        });
    }
};
__decorate([
    ViewChild("modalShowHistory", { static: false })
], ProductComponent.prototype, "modalShowHistory", void 0);
__decorate([
    ViewChild(DatatableComponent)
], ProductComponent.prototype, "table", void 0);
__decorate([
    ViewChild('tableRowDetails')
], ProductComponent.prototype, "tableRowDetails", void 0);
ProductComponent = __decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map