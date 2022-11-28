import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as snippet from 'app/main/components/pagination/pagination.snippetcode';
let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pageBasic = 4;
        this.pageBasicText = 3;
        this.pageColor = 4;
        this.pagePosition = 3;
        this.pageSizes = 3;
        this.pageAdvanced = 3;
        this.pageAdvancedLink = 3;
        this.pageAdvancedEllipses = 7;
        this.pageAdvancedNoEllipses = 8;
        // snippet code variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeIconText = snippet.snippetCodeIconText;
        this._snippetCodeOnlyIcons = snippet.snippetCodeOnlyIcons;
        this._snippetCodeSuccess = snippet.snippetCodeSuccess;
        this._snippetCodeDanger = snippet.snippetCodeDanger;
        this._snippetCodeInfo = snippet.snippetCodeInfo;
        this._snippetCodeWarning = snippet.snippetCodeWarning;
        this._snippetCodePositions = snippet.snippetCodePositions;
        this._snippetCodeSizes = snippet.snippetCodeSizes;
        this._snippetCodeAdvanceDefault = snippet.snippetCodeAdvanceDefault;
        this._snippetCodeDefaultlLastFirst = snippet.snippetCodeDefaultlLastFirst;
        this._snippetCodeEllipsesRotation = snippet.snippetCodeEllipsesRotation;
        this._snippetCodeRotatioNoEllipses = snippet.snippetCodeRotatioNoEllipses;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Pagination',
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
                        name: 'Pagination',
                        isLink: false
                    }
                ]
            }
        };
    }
};
PaginationComponent = __decorate([
    Component({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map