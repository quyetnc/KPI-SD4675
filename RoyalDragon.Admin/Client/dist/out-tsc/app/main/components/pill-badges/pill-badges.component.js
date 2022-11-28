import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/pill-badges/pill-badges.snippetcode';
let PillBadgesComponent = class PillBadgesComponent {
    constructor() {
        // snippet code variables
        this._snippetCodePillBadges = snippet.snippetCodePillBadges;
        this._snippetCodeGlowBadges = snippet.snippetCodeGlowBadges;
        this._snippetCodeLightBadges = snippet.snippetCodeLightBadges;
        this._snippetCodePillNotification = snippet.snippetCodePillNotification;
        this._snippetCodeBadgePillLink = snippet.snippetCodeBadgePillLink;
        this._snippetCodeBlockBadgePill = snippet.snippetCodeBlockBadgePill;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Pill Badges',
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
                        name: 'Pill Badges',
                        isLink: false
                    }
                ]
            }
        };
    }
};
PillBadgesComponent = __decorate([
    Component({
        selector: 'app-pill-badges',
        templateUrl: './pill-badges.component.html'
    })
], PillBadgesComponent);
export { PillBadgesComponent };
//# sourceMappingURL=pill-badges.component.js.map