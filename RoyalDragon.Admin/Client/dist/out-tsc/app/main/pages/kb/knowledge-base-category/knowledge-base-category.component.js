import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let KnowledgeBaseCategoryComponent = class KnowledgeBaseCategoryComponent {
    /**
     * Constructor
     *
     * @param {knowledgeBaseCategoryService} _knowledgeBaseCategoryService
     */
    constructor(_knowledgeBaseCategoryService, router) {
        this._knowledgeBaseCategoryService = _knowledgeBaseCategoryService;
        this.router = router;
        this.url = this.router.url;
        this._unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this._knowledgeBaseCategoryService.onKBCategoryChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Category',
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
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Category',
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
KnowledgeBaseCategoryComponent = __decorate([
    Component({
        selector: 'app-knowledge-base-category',
        templateUrl: './knowledge-base-category.component.html',
        styleUrls: ['./knowledge-base-category.component.scss']
    })
], KnowledgeBaseCategoryComponent);
export { KnowledgeBaseCategoryComponent };
//# sourceMappingURL=knowledge-base-category.component.js.map