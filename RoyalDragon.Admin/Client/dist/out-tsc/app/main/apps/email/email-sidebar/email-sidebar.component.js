import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let EmailSidebarComponent = class EmailSidebarComponent {
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
     * Open Compose & Update Value in Service
     */
    openCompose() {
        this.openComposeRef = true;
        this._emailService.composeEmail(this.openComposeRef);
        this._coreSidebarService.getSidebarRegistry('email-sidebar').toggleOpen();
    }
    /**
     * Toggle Sidebar
     *
     * @param nameRef
     */
    toggleSidebar(nameRef) {
        this._coreSidebarService.getSidebarRegistry(nameRef).toggleOpen();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Folder
        this._emailService.onFoldersChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.folders = response;
        });
        // Subscribe to Labels
        this._emailService.onLabelsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.labels = response;
        });
        // Subscribe to Draft and Unread Mail Count
        this._emailService.onDraftCountChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(response => (this.draftCount = response));
        this._emailService.onUnreadInboxCountChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(response => (this.unReadInboxCount = response));
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
EmailSidebarComponent = __decorate([
    Component({
        selector: 'app-email-sidebar',
        templateUrl: './email-sidebar.component.html',
        encapsulation: ViewEncapsulation.None
    })
], EmailSidebarComponent);
export { EmailSidebarComponent };
//# sourceMappingURL=email-sidebar.component.js.map