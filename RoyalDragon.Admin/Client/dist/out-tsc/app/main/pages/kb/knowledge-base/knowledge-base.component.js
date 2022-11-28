import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let KnowledgeBaseComponent = class KnowledgeBaseComponent {
    /**
     * Constructor
     *
     * @param {knowledgeBaseService} _knowledgeBaseService
     */
    constructor(_knowledgeBaseService) {
        this._knowledgeBaseService = _knowledgeBaseService;
        this._unsubscribeAll = new Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Changes
     */
    ngOnInit() {
        this._knowledgeBaseService.onKBChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Knowledge Base',
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
                        name: 'Knowledge Base',
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
KnowledgeBaseComponent = __decorate([
    Component({
        selector: 'app-knowledge-base',
        templateUrl: './knowledge-base.component.html',
        styleUrls: ['./knowledge-base.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], KnowledgeBaseComponent);
export { KnowledgeBaseComponent };
//# sourceMappingURL=knowledge-base.component.js.map