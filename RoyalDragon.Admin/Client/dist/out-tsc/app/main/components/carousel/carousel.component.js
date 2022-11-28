import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/carousel/carousel.snippetcode';
let CarouselComponent = class CarouselComponent {
    constructor() {
        this.carouselImages = {
            one: '/assets/images/slider/01.jpg',
            two: '/assets/images/slider/02.jpg',
            three: '/assets/images/slider/03.jpg',
            four: '/assets/images/slider/04.jpg',
            five: '/assets/images/slider/05.jpg',
            six: '/assets/images/slider/06.jpg'
        };
        // snippet code variables
        this._snippetCodeBasicExample = snippet.snippetCodeBasicExample;
        this._snippetCodeOptionalCaptions = snippet.snippetCodeOptionalCaptions;
        this._snippetCodeIntervalOption = snippet.snippetCodeIntervalOption;
        this._snippetCodePauseOption = snippet.snippetCodePauseOption;
        this._snippetCodeWrapOption = snippet.snippetCodeWrapOption;
        this._snippetCodeKeyboardOption = snippet.snippetCodeKeyboardOption;
        this._snippetCodeNavigationArrow = snippet.snippetCodeNavigationArrow;
        this._snippetCodeNavigationIndicators = snippet.snippetCodeNavigationIndicators;
        this._snippetCodeCrossfade = snippet.snippetCodeCrossfade;
        this._snippetCodeActiveId = snippet.snippetCodeActiveId;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Carousel',
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
                        name: 'Carousel',
                        isLink: false
                    }
                ]
            }
        };
    }
};
CarouselComponent = __decorate([
    Component({
        selector: 'app-carousel',
        templateUrl: './carousel.component.html'
    })
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map