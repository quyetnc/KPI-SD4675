import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/avatar/avatar.snippetcode';
let AvatarComponent = class AvatarComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeInitials = snippet.snippetCodeInitials;
        this._snippetCodeSizes = snippet.snippetCodeSizes;
        this._snippetCodeColors = snippet.snippetCodeColors;
        this._snippetCodeLightColors = snippet.snippetCodeLightColors;
        this._snippetCodeIcons = snippet.snippetCodeIcons;
        this._snippetCodeStatus = snippet.snippetCodeStatus;
        this._snippetCodeGroup = snippet.snippetCodeGroup;
        this._snippetCodeGroupTooltip = snippet.snippetCodeGroupTooltip;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Avatar',
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
                        name: 'Avatar',
                        isLink: false
                    }
                ]
            }
        };
    }
};
AvatarComponent = __decorate([
    Component({
        selector: 'app-avatar',
        templateUrl: './avatar.component.html'
    })
], AvatarComponent);
export { AvatarComponent };
//# sourceMappingURL=avatar.component.js.map