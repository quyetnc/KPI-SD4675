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
let OrderComponent = class OrderComponent {
    /**
     * Constructor
     *
     * @param {DatatablesService} _datatablesService
     * @param {CoreTranslationService} _coreTranslationService
     */
    constructor(_datatablesService, _coreTranslationService, _orderService, modalService, fb) {
        this._datatablesService = _datatablesService;
        this._coreTranslationService = _coreTranslationService;
        this._orderService = _orderService;
        this.modalService = modalService;
        this.fb = fb;
        this.tempData = [];
        this.selected = [];
        this.listProductUpdateHistory = [];
        this.listOrders = [];
        this.product = {}; //Single Product Selected or Create Product
        this.listOrderDetails = [];
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
        this._coreTranslationService.translate(english, french, german, portuguese);
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Inline editing Name
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateName(event, cell, rowIndex) {
        this.editingName[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Age
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateAge(event, cell, rowIndex) {
        this.editingAge[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Salary
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateSalary(event, cell, rowIndex) {
        this.editingSalary[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Status
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateStatus(event, cell, rowIndex) {
        this.editingStatus[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Search (filter)
     *
     * @param event
     */
    filterUpdate(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.tempData.filter(function (d) {
            return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.kitchenSinkRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    /**
     * Row Details Toggle
     *
     * @param row
     */
    rowDetailsToggleExpand(row) {
        this.tableRowDetails.rowDetail.toggleExpandRow(row);
    }
    /**
     * For ref only, log selected values
     *
     * @param selected
     */
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.product = { ...selected[0] };
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    /**
     * For ref only, log activate events
     *
     * @param selected
     */
    onActivate(event) {
        // console.log('Activate Event', event);
    }
    /**
     * Custom Chkbox On Select
     *
     * @param { selected }
     */
    customChkboxOnSelect({ selected }) {
        this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
        this.chkBoxSelected.push(...selected);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
            this.kitchenSinkRows = this.rows;
            this.exportCSVData = this.rows;
        });
        this.initForm();
        this.fetchDataListOrders();
        // content header
        this.contentHeader = {
            headerTitle: 'Danh sách đơn hàng',
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
                        name: 'Bán hàng',
                        isLink: false,
                        link: '/'
                    },
                    {
                        name: 'Đơn hàng',
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
        });
    }
    fViewOrderDetails(orderId) {
        this._orderService.apiOrderDetailOrderGet$Json$Response({ OrderId: orderId })
            .subscribe(res => {
            if (res.body.success) {
                this.modalService.open(this.modalShowOrderDetails, {
                    scrollable: true,
                    centered: true,
                    size: "xl",
                });
                this.listOrderDetails = [...res.body.data];
            }
        });
    }
    removeProduct() {
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
    }
    modalOpenSLCIM(modalSLCIM, isCreate) {
        this.isCreate = isCreate;
        if (isCreate) {
            this.resetForm();
        }
        else {
            console.log("this.product", this.product);
            this.productForm.patchValue(this.product);
            console.log(this.productForm);
        }
        this.modalService.open(modalSLCIM, {
            scrollable: true,
            centered: true,
            size: "lg",
        });
    }
    fetchDataListOrders() {
        this._orderService.apiOrderListOrderGet$Json$Response().subscribe((result) => {
            if (result.body.success)
                this.listOrders = [...result.body.data];
            else
                Swal.fire({
                    icon: "error",
                    title: "Lỗi!",
                    text: "Lỗi xảy ra khi hiển thị danh sách đơn hàng!!!",
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
    ViewChild("modalShowOrderDetails", { static: false })
], OrderComponent.prototype, "modalShowOrderDetails", void 0);
__decorate([
    ViewChild(DatatableComponent)
], OrderComponent.prototype, "table", void 0);
__decorate([
    ViewChild('tableRowDetails')
], OrderComponent.prototype, "tableRowDetails", void 0);
OrderComponent = __decorate([
    Component({
        selector: 'app-order',
        templateUrl: './order.component.html',
        styleUrls: ['./order.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], OrderComponent);
export { OrderComponent };
//# sourceMappingURL=order.component.js.map