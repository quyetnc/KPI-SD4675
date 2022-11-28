import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let KnowledgeBaseQuestionComponent = class KnowledgeBaseQuestionComponent {
    /**
     * Constructor
     *
     * @param {knowledgeBaseCategoryService} _knowledgeBaseCategoryService
     */
    constructor(_knowledgeBaseCategoryService) {
        this._knowledgeBaseCategoryService = _knowledgeBaseCategoryService;
        this._unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this._knowledgeBaseCategoryService.onKBQuestionChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Question',
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
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Question',
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
KnowledgeBaseQuestionComponent = __decorate([
    Component({
        selector: 'app-knowledge-base-question',
        templateUrl: './knowledge-base-question.component.html',
        styleUrls: ['./knowledge-base-question.component.scss']
    })
], KnowledgeBaseQuestionComponent);
export { KnowledgeBaseQuestionComponent };
//# sourceMappingURL=knowledge-base-question.component.js.map