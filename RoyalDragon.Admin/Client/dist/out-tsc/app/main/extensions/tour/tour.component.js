import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as snippet from 'app/main/extensions/tour/tour.snippetcode';
let TourComponent = class TourComponent {
    /**
     * Constructor
     *
     * @param {ShepherdService} shepherdService
     */
    constructor(shepherdService) {
        this.shepherdService = shepherdService;
        this.backBtnClass = 'btn btn-sm btn-outline-primary';
        this.nextBtnClass = 'btn btn-sm btn-primary btn-next';
        // snippet code variables
        this._snippetCodeTour = snippet.snippetCodeTour;
    }
    // start tour
    startTour() {
        this.shepherdService.start();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * After View Init
     */
    ngAfterViewInit() {
        // tour steps
        this.shepherdService.defaultStepOptions = {
            cancelIcon: {
                enabled: true
            }
        };
        this.shepherdService.modal = true;
        this.shepherdService.addSteps([
            {
                title: 'Navbar',
                text: 'This is your navbar',
                attachTo: {
                    element: '.navbar',
                    on: 'bottom'
                },
                buttons: [
                    {
                        text: 'Skip',
                        type: 'cancel',
                        classes: this.backBtnClass
                    },
                    {
                        text: 'Next',
                        type: 'next',
                        classes: this.nextBtnClass
                    }
                ],
                useModalOverlay: true
            },
            {
                title: 'Card',
                text: 'This is a card.',
                attachTo: {
                    element: '.card',
                    on: 'top'
                },
                buttons: [
                    {
                        text: 'Skip',
                        type: 'cancel',
                        classes: this.backBtnClass
                    },
                    {
                        text: 'Back',
                        type: 'back',
                        classes: this.backBtnClass
                    },
                    {
                        text: 'Next',
                        type: 'next',
                        classes: this.nextBtnClass
                    }
                ]
            },
            {
                title: 'Footer',
                text: 'This is the footer.',
                attachTo: {
                    element: '.footer',
                    on: 'top'
                },
                buttons: [
                    {
                        text: 'Back',
                        type: 'back',
                        classes: this.backBtnClass
                    },
                    {
                        text: 'Finish',
                        type: 'next',
                        classes: this.nextBtnClass
                    }
                ]
            }
        ]);
    }
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Tour',
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
                        name: 'Tour',
                        isLink: false
                    }
                ]
            }
        };
    }
};
TourComponent = __decorate([
    Component({
        selector: 'app-tour',
        templateUrl: './tour.component.html',
        styleUrls: ['./tour.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], TourComponent);
export { TourComponent };
//# sourceMappingURL=tour.component.js.map