import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as snippet from 'app/main/extensions/clipboard/clipboard.snippetcode';
let ClipboardComponent = class ClipboardComponent {
    /**
     * Constructor
     *
     * @param {ToastrService} toastr
     */
    constructor(toastr) {
        this.toastr = toastr;
        // snippet code variables
        this._snippetCodeClipboard = snippet.snippetCodeClipboard;
        this.options = this.toastr.toastrConfig;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Copy input text value
     *
     * @param inputTextValue
     */
    copyCode(inputTextValue) {
        const selectBox = document.createElement('textarea');
        selectBox.style.position = 'fixed';
        selectBox.value = inputTextValue;
        document.body.appendChild(selectBox);
        selectBox.focus();
        selectBox.select();
        document.execCommand('copy');
        document.body.removeChild(selectBox);
        this.toastr.success('', 'Copied sucessfully', { toastClass: 'toast ngx-toastr', closeButton: true });
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Clipboard',
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
                        name: 'Clipboard',
                        isLink: false
                    }
                ]
            }
        };
    }
};
ClipboardComponent = __decorate([
    Component({
        selector: 'app-clipboard',
        templateUrl: './clipboard.component.html',
        styleUrls: ['./clipboard.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], ClipboardComponent);
export { ClipboardComponent };
//# sourceMappingURL=clipboard.component.js.map