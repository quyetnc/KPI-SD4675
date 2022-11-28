import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import * as snippet from 'app/main/components/ratings/ratings.snippetcode';
let RatingsComponent = class RatingsComponent {
    constructor() {
        this.basicCurrentRate = 8;
        this.sizeSMCurrentRate = 4;
        this.sizeCurrentRate = 4;
        this.sizeLGCurrentRate = 4;
        this.iconsCurrentRate = 8;
        this.ERselected = 0;
        this.ERhovered = 0;
        this.ERreadonly = false;
        this.decimalCurrentRate = 2.25;
        this.ctrl = new UntypedFormControl(null, Validators.required);
        // snippet code variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeSizes = snippet.snippetCodeSizes;
        this._snippetCodeIcons = snippet.snippetCodeIcons;
        this._snippetCodeReadonly = snippet.snippetCodeReadonly;
        this._snippetCodeIntegration = snippet.snippetCodeIntegration;
        this._snippetCodeCustomdecimal = snippet.snippetCodeCustomdecimal;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    toggle() {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Ratings',
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
                        name: 'Ratings',
                        isLink: false
                    }
                ]
            }
        };
    }
};
RatingsComponent = __decorate([
    Component({
        selector: 'app-ratings',
        templateUrl: './ratings.component.html',
        styleUrls: ['./ratings.component.scss']
    })
], RatingsComponent);
export { RatingsComponent };
//# sourceMappingURL=ratings.component.js.map