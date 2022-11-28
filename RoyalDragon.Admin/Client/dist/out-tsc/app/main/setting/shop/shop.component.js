import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
let ShopComponent = class ShopComponent {
    /**
     * Constructor
     *
     * @param {AccountSettingsService} _accountSettingsService
     */
    constructor(_productService, _accountSettingsService) {
        this._productService = _productService;
        this._accountSettingsService = _accountSettingsService;
        this.listProduct = [];
        this.birthDateOptions = {
            altInput: true
        };
        this.passwordTextTypeOld = false;
        this.passwordTextTypeNew = false;
        this.passwordTextTypeRetype = false;
        // Select Custom Tag
        this.customTagselected = [];
        this._unsubscribeAll = new Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle Password Text Type Old
     */
    togglePasswordTextTypeOld() {
        this.passwordTextTypeOld = !this.passwordTextTypeOld;
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
    /**
     * Toggle Password Text Type New
     */
    togglePasswordTextTypeNew() {
        this.passwordTextTypeNew = !this.passwordTextTypeNew;
    }
    /**
     * Toggle Password Text Type Retype
     */
    togglePasswordTextTypeRetype() {
        this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
    }
    /**
     * Upload Image
     *
     * @param event
     */
    uploadImage(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event) => {
                this.avatarImage = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // this.fetchDataListProducts();
        this._accountSettingsService.onSettingsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
            this.avatarImage = this.data.accountSetting.general.avatar;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Thiết lập cửa hàng',
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
                        name: 'Thiết lập',
                        isLink: false,
                        link: '/'
                    },
                    {
                        name: 'Cửa hàng',
                        isLink: false
                    }
                ]
            }
        };
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
};
ShopComponent = __decorate([
    Component({
        selector: 'app-shop',
        templateUrl: './shop.component.html',
        styleUrls: ['./shop.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], ShopComponent);
export { ShopComponent };
//# sourceMappingURL=shop.component.js.map