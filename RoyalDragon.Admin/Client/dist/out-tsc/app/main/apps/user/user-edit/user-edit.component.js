import { __decorate } from "tslib";
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
let UserEditComponent = class UserEditComponent {
    /**
     * Constructor
     *
     * @param {Router} router
     * @param {UserEditService} _userEditService
     */
    constructor(router, _userEditService) {
        this.router = router;
        this._userEditService = _userEditService;
        // Public
        this.url = this.router.url;
        this.birthDateOptions = {
            altInput: true
        };
        this.selectMultiLanguages = ['English', 'Spanish', 'French', 'Russian', 'German', 'Arabic', 'Sanskrit'];
        this.selectMultiLanguagesSelected = [];
        this._unsubscribeAll = new Subject();
        this.urlLastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Reset Form With Default Values
     */
    resetFormWithDefaultValues() {
        this.accountForm.resetForm(this.tempRow);
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
    /**
     * Submit
     *
     * @param form
     */
    submit(form) {
        if (form.valid) {
            console.log('Submitted...!');
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._userEditService.onUserEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.rows.map(row => {
                if (row.id == this.urlLastValue) {
                    this.currentRow = row;
                    this.avatarImage = this.currentRow.avatar;
                    this.tempRow = cloneDeep(row);
                }
            });
        });
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
__decorate([
    ViewChild('accountForm')
], UserEditComponent.prototype, "accountForm", void 0);
UserEditComponent = __decorate([
    Component({
        selector: 'app-user-edit',
        templateUrl: './user-edit.component.html',
        styleUrls: ['./user-edit.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], UserEditComponent);
export { UserEditComponent };
//# sourceMappingURL=user-edit.component.js.map