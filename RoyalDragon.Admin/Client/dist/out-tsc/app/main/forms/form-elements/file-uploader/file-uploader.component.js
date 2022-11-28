import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'https://your-url.com';
let FileUploaderComponent = class FileUploaderComponent {
    constructor() {
        this.hasAnotherDropZoneOver = false;
        this.hasBaseDropZoneOver = false;
        this.uploader = new FileUploader({
            url: URL,
            isHTML5: true
        });
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    fileOverAnother(e) {
        this.hasAnotherDropZoneOver = e;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'File Uploader',
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
                        name: 'Extensions',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'File Uploader',
                        isLink: false
                    }
                ]
            }
        };
    }
};
FileUploaderComponent = __decorate([
    Component({
        selector: 'app-file-uploader',
        templateUrl: './file-uploader.component.html',
        styleUrls: ['./file-uploader.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FileUploaderComponent);
export { FileUploaderComponent };
//# sourceMappingURL=file-uploader.component.js.map