import { __decorate } from "tslib";
import { Component, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let EmailComposeComponent = class EmailComposeComponent {
    /**
     *
     * @param {EmailService} _emailService
     */
    constructor(_emailService) {
        this._emailService = _emailService;
        // Public
        this.emailToSelect = [
            { name: 'Jane Foster', avatar: '/assets/images/portrait/small/avatar-s-3.jpg' },
            { name: 'Donna Frank', avatar: '/assets/images/portrait/small/avatar-s-1.jpg' },
            { name: 'Gabrielle Robertson', avatar: '/assets/images/portrait/small/avatar-s-4.jpg' },
            { name: 'Lori Spears', avatar: '/assets/images/portrait/small/avatar-s-6.jpg' }
        ];
        this.emailCCSelect = [
            { name: 'Jane Foster', avatar: '/assets/images/portrait/small/avatar-s-3.jpg' },
            { name: 'Donna Frank', avatar: '/assets/images/portrait/small/avatar-s-1.jpg' },
            { name: 'Gabrielle Robertson', avatar: '/assets/images/portrait/small/avatar-s-4.jpg' },
            { name: 'Lori Spears', avatar: '/assets/images/portrait/small/avatar-s-6.jpg' }
        ];
        this.emailBCCSelect = [
            { name: 'Jane Foster', avatar: '/assets/images/portrait/small/avatar-s-3.jpg' },
            { name: 'Donna Frank', avatar: '/assets/images/portrait/small/avatar-s-1.jpg' },
            { name: 'Gabrielle Robertson', avatar: '/assets/images/portrait/small/avatar-s-4.jpg' },
            { name: 'Lori Spears', avatar: '/assets/images/portrait/small/avatar-s-6.jpg' }
        ];
        this.emailCCSelected = [];
        this.emailBCCSelected = [];
        this.isOpenCC = false;
        this.isOpenBCC = false;
        this.isComposeOpen = false;
        this._unsubscribeAll = new Subject();
    }
    // Decorator
    fn() {
        this.closeCompose();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle CC & BCC
     *
     * @param toggleRef
     */
    togglCcBcc(toggleRef) {
        if (toggleRef == 'cc') {
            this.isOpenCC = !this.isOpenCC;
        }
        else {
            this.isOpenBCC = !this.isOpenBCC;
        }
    }
    /**
     * Close Compose
     */
    closeCompose() {
        this.isComposeOpen = false;
        this._emailService.composeEmail(this.isComposeOpen);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Compose Model Changes
        this._emailService.composeEmailChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.isComposeOpen = response;
            if (this.isComposeOpen) {
                setTimeout(() => {
                    this._selectRef.searchInput.nativeElement.focus();
                }, 0);
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
    HostListener('keydown.escape')
], EmailComposeComponent.prototype, "fn", null);
__decorate([
    ViewChild('selectRef')
], EmailComposeComponent.prototype, "_selectRef", void 0);
EmailComposeComponent = __decorate([
    Component({
        selector: 'app-email-compose',
        templateUrl: './email-compose.component.html',
        encapsulation: ViewEncapsulation.None
    })
], EmailComposeComponent);
export { EmailComposeComponent };
//# sourceMappingURL=email-compose.component.js.map