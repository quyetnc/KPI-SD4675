import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/textarea/textarea.snippetcode';
let TextareaComponent = class TextareaComponent {
    constructor() {
        this._snippetCodeDefault = snippet.snippetCodeDefault;
        this._snippetCodeFloating = snippet.snippetCodeFloating;
        this._snippetCodeCounter = snippet.snippetCodeCounter;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Textarea',
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
                        name: 'Form Elements',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Textarea',
                        isLink: false
                    }
                ]
            }
        };
    }
};
TextareaComponent = __decorate([
    Component({
        selector: 'app-textarea',
        templateUrl: './textarea.component.html'
    })
], TextareaComponent);
export { TextareaComponent };
//# sourceMappingURL=textarea.component.js.map