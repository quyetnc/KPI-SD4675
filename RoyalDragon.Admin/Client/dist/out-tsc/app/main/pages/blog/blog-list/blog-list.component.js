import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let BlogListComponent = class BlogListComponent {
    /**
     * Constructor
     *
     * @param {BlogListService} _blogListService
     */
    constructor(_blogListService) {
        this._blogListService = _blogListService;
        this._unsubscribeAll = new Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Changes
     */
    ngOnInit() {
        this._blogListService.onBlogListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Blog List',
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
                        name: 'Blog',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'List',
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
BlogListComponent = __decorate([
    Component({
        selector: 'app-blog-list',
        templateUrl: './blog-list.component.html',
        styleUrls: ['./blog-list.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], BlogListComponent);
export { BlogListComponent };
//# sourceMappingURL=blog-list.component.js.map