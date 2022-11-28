import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CoreCardSnippetComponent = class CoreCardSnippetComponent {
    constructor() {
        // public
        this.copyCodeStatus = false;
        // private
        this._defaultSnippetCode = {
            isCollapsed: true // default collapsed is true
        };
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * copyCode
     *
     * @param code
     */
    copyCode(code) {
        const selectBox = document.createElement('textarea');
        selectBox.style.position = 'fixed';
        selectBox.value = code;
        document.body.appendChild(selectBox);
        selectBox.focus();
        selectBox.select();
        document.execCommand('copy');
        document.body.removeChild(selectBox);
        setTimeout(() => {
            this.copyCodeStatus = false;
        }, 500);
        this.copyCodeStatus = true;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // concatenate default properties with passed properties
        this.snippetCode = { ...this._defaultSnippetCode, ...this.snippetCode };
    }
};
__decorate([
    Input()
], CoreCardSnippetComponent.prototype, "snippetCode", void 0);
CoreCardSnippetComponent = __decorate([
    Component({
        selector: 'core-card-snippet',
        templateUrl: './card-snippet.component.html',
        styleUrls: ['./card-snippet.component.scss']
    })
], CoreCardSnippetComponent);
export { CoreCardSnippetComponent };
//# sourceMappingURL=card-snippet.component.js.map