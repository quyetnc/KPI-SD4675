import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let EmailDetailsComponent = class EmailDetailsComponent {
    /**
     *
     * @param {EmailService} _emailService
     */
    constructor(_emailService) {
        this._emailService = _emailService;
        this.isOpen = false;
        this.emailAppDetailReplies = false;
        this._unsubscribeAll = new Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open Replies
     */
    openReplies() {
        this.emailAppDetailReplies = true;
    }
    /**
     *  Toggle Details
     */
    toggleDetails() {
        this._emailService.closeEmailDetails();
        this._emailService.deselectEmails();
    }
    /**
     * Update Folder on Selected Emails
     *
     * @param folderRef
     */
    updateFolderOnSelectedMails(folderRef) {
        this._emailService.updateFolderOnSelectedEmails(folderRef);
    }
    /**
     * Update Labels On Selected Emails
     *
     * @param labelRef
     */
    updateLabelOnSelectedEmails(labelRef) {
        this._emailService.updateLabelOnSelectedEmails(labelRef);
    }
    /**
     * Un-read Email
     */
    unRead() {
        this._emailService.markAsUnread();
    }
    /**
     * Toggle Starred
     */
    /**
     * Toggle Starred
     */
    toggleStarred() {
        this._emailService.toggleStarred(this.openedEmail);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Email Close
        this._emailService.onEmailDetailChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            setTimeout(() => {
                this.isOpen = response;
                // this._emailService.deselectEmails();
            });
        });
        // Subscribe to Email Open & Details
        this._emailService.onOpenedEmailChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(email => {
            this.openedEmail = email;
            if (Object.keys(this.openedEmail).length > 0) {
                this.isOpen = true;
                this._emailService.setOpenedEmail(this.openedEmail);
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
EmailDetailsComponent = __decorate([
    Component({
        selector: 'app-email-details',
        templateUrl: './email-details.component.html',
        encapsulation: ViewEncapsulation.None
    })
], EmailDetailsComponent);
export { EmailDetailsComponent };
//# sourceMappingURL=email-details.component.js.map