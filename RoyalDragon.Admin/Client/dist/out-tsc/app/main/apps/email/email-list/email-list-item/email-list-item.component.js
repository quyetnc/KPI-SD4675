import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let EmailListItemComponent = class EmailListItemComponent {
    /**
     *
     * @param {EmailService} _emailService
     */
    constructor(_emailService) {
        this._emailService = _emailService;
        this._unsubscribeAll = new Subject();
    }
    /**
     * On Checkbox Change
     */
    onSelectedChange() {
        this._emailService.toggleSelectedMail(this.email.id);
    }
    /**
     * Toggle Starred
     */
    toggleStarred() {
        this._emailService.toggleStarred(this.email);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to update on selected email change
        this._emailService.onSelectedEmailsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(selectedMails => {
            this.selected = false;
            if (selectedMails.length > 0) {
                for (const email of selectedMails) {
                    if (email.id === this.email.id) {
                        this.selected = true;
                        break;
                    }
                }
            }
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
    Input()
], EmailListItemComponent.prototype, "email", void 0);
EmailListItemComponent = __decorate([
    Component({
        selector: 'email-list-item',
        templateUrl: './email-list-item.component.html',
        encapsulation: ViewEncapsulation.None
    })
], EmailListItemComponent);
export { EmailListItemComponent };
//# sourceMappingURL=email-list-item.component.js.map