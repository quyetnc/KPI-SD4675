import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/buttons/buttons.snippetcode';
let ButtonsComponent = class ButtonsComponent {
    constructor() {
        this.radioModel = 1;
        this.checkboxModel = {
            left: true,
            middle: false,
            right: false
        };
        // snippet code variables
        this._snippetCodeFilled = snippet.snippetCodeFilled;
        this._snippetCodeBorder = snippet.snippetCodeBorder;
        this._snippetCodeFlat = snippet.snippetCodeFlat;
        this._snippetCodeGradient = snippet.snippetCodeGradient;
        this._snippetCodeRelief = snippet.snippetCodeRelief;
        this._snippetCodeRoundbuttons = snippet.snippetCodeRoundbuttons;
        this._snippetCodeIcon = snippet.snippetCodeIcon;
        this._snippetCodeIconOnly = snippet.snippetCodeIconOnly;
        this._snippetCodeBasicButtongroup = snippet.snippetCodeBasicButtongroup;
        this._snippetCodeRadioButtonStyle = snippet.snippetCodeRadioButtonStyle;
        this._snippetCodeSizes = snippet.snippetCodeSizes;
        this._snippetCodeBlocklevelbuttons = snippet.snippetCodeBlocklevelbuttons;
        this._snippetCodeButtontags = snippet.snippetCodeButtontags;
        // Lifecycle Hooks
        // -----------------------------------------------------------------------------------------------------
        this.show = false;
    }
    /**
     * On init
     */
    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Buttons',
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
                        name: 'Buttons',
                        isLink: false
                    }
                ]
            }
        };
    }
};
ButtonsComponent = __decorate([
    Component({
        selector: 'app-buttons',
        templateUrl: './buttons.component.html'
    })
], ButtonsComponent);
export { ButtonsComponent };
//# sourceMappingURL=buttons.component.js.map