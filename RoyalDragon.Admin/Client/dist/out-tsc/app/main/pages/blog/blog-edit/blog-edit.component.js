import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let BlogEditComponent = class BlogEditComponent {
    /**
     * Constructor
     *
     * @param {BlogEditService} _blogEditService
     */
    constructor(_blogEditService) {
        this._blogEditService = _blogEditService;
        this.selectCategoriesSelected = ['Fashion'];
        this.fileName = undefined;
        this._unsubscribeAll = new Subject();
    }
    /**
     * Upload Image
     *
     * @param event
     */
    uploadImage(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event) => {
                this.featuredImage = event.target.result;
            };
            this.fileName = event.target.files[0].name;
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Changes
     */
    ngOnInit() {
        this._blogEditService.onBlogEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
            this.featuredImage = this.data.blogEdit.featuredImage;
        });
        this.selectCategories = this.data.blogEdit.blogCategories;
        // Content Header
        this.contentHeader = {
            headerTitle: 'Blog Edit',
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
                        name: 'Edit',
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
BlogEditComponent = __decorate([
    Component({
        selector: 'app-blog-edit',
        templateUrl: './blog-edit.component.html',
        styleUrls: ['./blog-edit.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], BlogEditComponent);
export { BlogEditComponent };
//# sourceMappingURL=blog-edit.component.js.map