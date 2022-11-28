import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let EmailListComponent = class EmailListComponent {
    /**
     *
     * @param {EmailService} _emailService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_emailService, _coreSidebarService) {
        this._emailService = _emailService;
        this._coreSidebarService = _coreSidebarService;
        this._unsubscribeAll = new Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    /**
     * Toggle Select All
     */
    toggleSelectAll() {
        this._emailService.toggleSelectAll();
    }
    /**
     * Update Folder On Selected Emails
     *
     * @param folderRef
     */
    updateFolderOnSelectedMails(folderRef) {
        this._emailService.updateFolderOnSelectedEmails(folderRef);
    }
    /**
     * Updated Labels On Selected Emails
     *
     * @param labelRef
     */
    updateLabelOnSelectedEmails(labelRef) {
        this._emailService.updateLabelOnSelectedEmails(labelRef);
    }
    /**
     * Open Email
     *
     * @param id
     */
    openEmail(id) {
        this._emailService.openEmailDetails(id);
    }
    /**
     * Un-Read
     */
    unRead() {
        this._emailService.markAsUnread();
    }
    /**
     * Query Update
     *
     * @param queryValue
     */
    queryUpdate(queryValue) {
        this._emailService.updateSearchText(queryValue.target.value);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Selected Emails changes
        this._emailService.onSelectedEmailsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(selectedMails => {
            setTimeout(() => {
                this.hasSelectedMails = selectedMails.length > 0;
                this.isIndeterminate = selectedMails.length !== this._emailService.emails.length && selectedMails.length > 0;
            }, 0);
        });
        // Subscribe to update Emails on changes
        this._emailService.onEmailsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(emails => {
            this.emails = emails;
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
EmailListComponent = __decorate([
    Component({
        selector: 'app-email-list',
        templateUrl: './email-list.component.html',
        encapsulation: ViewEncapsulation.None
    })
], EmailListComponent);
export { EmailListComponent };
//# sourceMappingURL=email-list.component.js.map