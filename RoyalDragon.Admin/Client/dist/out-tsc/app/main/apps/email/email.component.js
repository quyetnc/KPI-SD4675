import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
let EmailComponent = class EmailComponent {
    /**
     *
     * @param {DOCUMENT} document
     * @param {ActivatedRoute} route
     * @param {EmailService} _emailService
     */
    constructor(document, route, _emailService) {
        this.document = document;
        this.route = route;
        this._emailService = _emailService;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Update Search Text on QueryParams Change
        this.route.queryParams.subscribe(val => {
            this._emailService.updateSearchText(val.q);
        });
    }
};
EmailComponent = __decorate([
    Component({
        selector: 'app-email',
        templateUrl: './email.component.html',
        styleUrls: ['./email.component.scss'],
        encapsulation: ViewEncapsulation.None,
        host: { class: 'email-application' }
    }),
    __param(0, Inject(DOCUMENT))
], EmailComponent);
export { EmailComponent };
//# sourceMappingURL=email.component.js.map