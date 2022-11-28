import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { BlockUI } from 'ng-block-ui';
import * as snippet from 'app/main/extensions/blockui/blockui.snippetcode';
let BlockuiComponent = class BlockuiComponent {
    /**
     * Constructor
     *
     */
    constructor() {
        this._snippetCodeSectionBlocking = snippet.snippetCodeSectionBlocking;
        this._snippetCodeCardBlocking = snippet.snippetCodeCardBlocking;
        this._snippetCodePageBlocking = snippet.snippetCodePageBlocking;
        this._snippetCodeFormBlocking = snippet.snippetCodeFormBlocking;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * full Page BlockUI
     *
     */
    fullPageBlockUI() {
        this.blockUI.start('Loading...'); // Start blocking
        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }
    /**
     * Default Section BlockUI
     *
     */
    defaultSectionBlockUI() {
        this.sectionBlockUI.start();
        setTimeout(() => {
            this.sectionBlockUI.stop();
        }, 2500);
    }
    /**
     * Default Card BlockUI
     *
     */
    defaultCardBlockUI() {
        this.cardBlockUI.start();
        setTimeout(() => {
            this.cardBlockUI.stop();
        }, 2500);
    }
    /**
     * Default Form BlockUI
     *
     */
    defaultFormBlockUI() {
        this.formBlockUI.start();
        setTimeout(() => {
            this.formBlockUI.stop();
        }, 2500);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'BlockUI',
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
                        name: 'BlockUI',
                        isLink: false
                    }
                ]
            }
        };
    }
};
__decorate([
    BlockUI()
], BlockuiComponent.prototype, "blockUI", void 0);
__decorate([
    BlockUI('section-block')
], BlockuiComponent.prototype, "sectionBlockUI", void 0);
__decorate([
    BlockUI('card-section')
], BlockuiComponent.prototype, "cardBlockUI", void 0);
__decorate([
    BlockUI('form-section')
], BlockuiComponent.prototype, "formBlockUI", void 0);
BlockuiComponent = __decorate([
    Component({
        selector: 'app-blockui',
        templateUrl: './blockui.component.html',
        styleUrls: ['./blockui.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], BlockuiComponent);
export { BlockuiComponent };
//# sourceMappingURL=blockui.component.js.map