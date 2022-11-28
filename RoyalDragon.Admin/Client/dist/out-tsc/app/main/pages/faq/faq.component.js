import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let FaqComponent = class FaqComponent {
    /**
     * Constructor
     *
     * @param {FAQService} _faqService
     */
    constructor(_faqService) {
        this._faqService = _faqService;
        this._unsubscribeAll = new Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Changes
     */
    ngOnInit() {
        this._faqService.onFaqsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'FAQ',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Pages',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'FAQ',
                        isLink: false
                    }
                ]
            }
        };
    }
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
};
FaqComponent = __decorate([
    Component({
        selector: 'app-faq',
        templateUrl: './faq.component.html',
        styleUrls: ['./faq.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], FaqComponent);
export { FaqComponent };
//# sourceMappingURL=faq.component.js.map