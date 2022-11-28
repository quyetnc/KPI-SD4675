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
let UserComponent = class UserComponent {
    /**
     * Constructor
     *
     * @param {DatatablesService} _datatablesService
     * @param {CoreTranslationService} _coreTranslationService
     */
    constructor(_datatablesService, _coreTranslationService, _userService, modalService, _commonService, fb) {
        this._datatablesService = _datatablesService;
        this._coreTranslationService = _coreTranslationService;
        this._userService = _userService;
        this.modalService = modalService;
        this._commonService = _commonService;
        this.fb = fb;
        this.tempData = [];
        this.selected = [];
        this.listUser = [];
        this.listRoles = [];
        this.user = {}; //Single User Selected or Create User
        this.basicSelectedOption = 10;
        this.ColumnMode = ColumnMode;
        this.expanded = {};
        this.editingName = {};
        this.editingStatus = {};
        this.editingAge = {};
        this.editingSalary = {};
        this.chkBoxSelected = [];
        this.SelectionType = SelectionType;
        // Select Custom Tag
        this.customTagselected = [];
        this.customTag = [];
        this.customTagNames = ['Uber', 'Microsoft', 'Flexigen'];
        this.isCreate = false;
        // snippet code variables
        this._snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
        this._snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
        this._snippetCodeRowDetails = snippet.snippetCodeRowDetails;
        this._snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
        this._snippetCodeResponsive = snippet.snippetCodeResponsive;
        this._snippetCodeMultilangual = snippet.snippetCodeMultilangual;
        this.minDate = void 0;
        this.minDate = new Date(1980, 1, 1);
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
        this.user = { ...selected[0] };
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
        this.customTagNames.forEach((c, i) => {
            this.customTag.push({ id: i, name: c });
        });
        this.initForm();
        this.fetchDataListUsers();
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
        this.userForm = this.fb.group({
            userId: [0, [Validators.required]],
            username: ["", [Validators.required, Validators.maxLength(200)]],
            fullname: ["", [Validators.maxLength(200)]],
            password: ["", [Validators.maxLength(200)]],
            birthday: [""],
            address: ["", [Validators.maxLength(200)]],
            phone: [""],
            role: [["", ""]],
            userRole: [[]],
            email: ["", [Validators.email, Validators.required]]
        });
    }
    selectAddTagMethod(name) {
        return { name: name, tag: true };
    }
    removeUser() {
        let arrUserId = this.selected.map(x => x.userId);
        Swal.fire({
            icon: "question",
            title: "Xác nhận",
            text: `Bạn chắc chắn xoá ${arrUserId.length} sản phẩm, Bạn đang nhầm với "Ngừng kinh doanh" những mặt hàng này?`,
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-default"
            }
        }).then(result => {
            if (result.isConfirmed) {
                this._userService.apiUserDisableUserDelete$Json$Response({
                // ListProductId
                }).subscribe((rs) => {
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
        this.user = {};
        this.userForm.patchValue(this.user);
    }
    validate(param) {
        return (this.userForm.value[param] != null &&
            this.userForm.value[param] != "");
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
    createOrUpdateUser() {
        
        if (this.validate("fullname") &&
            this.validate("username") &&
            this.validate("email") &&
            this.validate("phone") &&
            this.userForm.value["role"].length > 0) {
            this.userForm.controls["birthday"].patchValue(this._commonService.ngbDateToDateLocal(this.userForm.value["birthday"]));
            let arrRoles = [];
            for (let i = 0; i < this.userForm.value["role"].length; i++) {
                const role = this.userForm.value["role"][i];
                let userRole = {};
                userRole.role = role;
                userRole.user = this.userForm.value;
                arrRoles.push(userRole);
            }
            this.userForm.controls["userRole"].patchValue(arrRoles);
            this.clearErrorMessage();
            if (this.isCreate) {
                let params = {
                    body: {
                        user: this.userForm.value,
                        userId: 0
                    },
                };
                this._userService.apiUserCreateUserPost$Plain({
                    body: {
                        user: this.userForm.value
                    }
                }).subscribe((rs) => {
                    if (rs.success) {
                        this.listUser.push(rs.data);
                        this.listUser = [...this.listUser];
                    }
                    this.afterCallApi(rs.success, rs.message);
                }, (err) => {
                    this.modalService.dismissAll();
                    this.resetForm();
                });
            }
            else {
                let params = {
                    body: {
                        product: this.userForm.value,
                        userId: 0
                    },
                };
                
                this._userService.apiUserUpdateUserPost$Json$Response(params).subscribe((rs) => {
                    if (rs.body.success) {
                        //Find index of specific object using findIndex method.    
                        let objIndex = this.listUser.findIndex((obj => obj.userId == this.user.userId));
                        //Log object to Console.
                        console.log("Before update: ", this.listUser[objIndex]);
                        //Update object's name property.
                        this.listUser = [...this.listUser];
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
        if (isCreate) {
            this.resetForm();
        }
        else {
            this.userForm.patchValue(this.user);
            var listRoleSelected = [];
            for (let i = 0; i < this.user.userRole.length; i++) {
                const element = this.user.userRole[i];
                listRoleSelected.push(element.role);
            }
            this.customTagselected = listRoleSelected;
            console.log(this.userForm);
        }
        this.modalService.open(modalSLCIM, {
            scrollable: true,
            centered: true,
            size: "lg",
        });
    }
    fetchDataListUsers() {
        this._userService.apiUserListUserGet$Json$Response().subscribe((result) => {
            if (result.body.success) {
                this.listUser = [...result.body.data.users];
                this.listRoles = [...result.body.data.roles];
            }
            else
                Swal.fire({
                    icon: "error",
                    title: "Lỗi!",
                    text: "Lỗi xảy ra khi hiển thị danh sách  nhân viên!!!",
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
    ViewChild(DatatableComponent)
], UserComponent.prototype, "table", void 0);
__decorate([
    ViewChild('tableRowDetails')
], UserComponent.prototype, "tableRowDetails", void 0);
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map