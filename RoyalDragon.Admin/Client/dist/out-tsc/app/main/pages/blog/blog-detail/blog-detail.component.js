import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let BlogDetailComponent = class BlogDetailComponent {
    /**
     * Constructor
     *
     * @param {BlogEditService} _blogDetailsService
     */
    constructor(_blogDetailsService) {
        this._blogDetailsService = _blogDetailsService;
        this._unsubscribeAll = new Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Changes
     */
    ngOnInit() {
        this._blogDetailsService.onBlogDetailChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Blog Detail',
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
                        name: 'Detail',
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
BlogDetailComponent = __decorate([
    Component({
        selector: 'app-blog-detail',
        templateUrl: './blog-detail.component.html',
        styleUrls: ['./blog-detail.component.scss']
    })
], BlogDetailComponent);
export { BlogDetailComponent };
//# sourceMappingURL=blog-detail.component.js.map