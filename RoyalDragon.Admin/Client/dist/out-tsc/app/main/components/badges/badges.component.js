import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/badges/badges.snippetcode';
let BadgesComponent = class BadgesComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeBadge = snippet.snippetCodeBadge;
        this._snippetCodeGlowBadge = snippet.snippetCodeGlowBadge;
        this._snippetCodeLightBadge = snippet.snippetCodeLightBadge;
        this._snippetCodeWithIcons = snippet.snippetCodeWithIcons;
        this._snippetCodeLink = snippet.snippetCodeLink;
        this._snippetCodeBlockWithLink = snippet.snippetCodeBlockWithLink;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Badges',
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
                        name: 'Components',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Badges',
                        isLink: false
                    }
                ]
            }
        };
    }
};
BadgesComponent = __decorate([
    Component({
        selector: 'app-badges',
        templateUrl: './badges.component.html'
    })
], BadgesComponent);
export { BadgesComponent };
//# sourceMappingURL=badges.component.js.map