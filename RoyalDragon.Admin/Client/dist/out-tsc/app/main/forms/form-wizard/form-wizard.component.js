import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import Stepper from 'bs-stepper';
let FormWizardComponent = class FormWizardComponent {
    constructor() {
        this.selectBasic = [
            { name: 'UK' },
            { name: 'USA' },
            { name: 'Spain' },
            { name: 'France' },
            { name: 'Italy' },
            { name: 'Australia' }
        ];
        this.selectMulti = [{ name: 'English' }, { name: 'French' }, { name: 'Spanish' }];
    }
    /**
     * Horizontal Wizard Stepper Next
     *
     * @param data
     */
    horizontalWizardStepperNext(data) {
        if (data.form.valid === true) {
            this.horizontalWizardStepper.next();
        }
    }
    /**
     * Horizontal Wizard Stepper Previous
     */
    horizontalWizardStepperPrevious() {
        this.horizontalWizardStepper.previous();
    }
    /**
     * Vertical Wizard Stepper Next
     */
    verticalWizardNext() {
        this.verticalWizardStepper.next();
    }
    /**
     * Vertical Wizard Stepper Previous
     */
    verticalWizardPrevious() {
        this.verticalWizardStepper.previous();
    }
    /**
     * Modern Horizontal Wizard Stepper Next
     */
    modernHorizontalNext() {
        this.modernWizardStepper.next();
    }
    /**
     * Modern Horizontal Wizard Stepper Previous
     */
    modernHorizontalPrevious() {
        this.modernWizardStepper.previous();
    }
    /**
     * Modern Vertical Wizard Stepper Next
     */
    modernVerticalNext() {
        this.modernVerticalWizardStepper.next();
    }
    /**
     * Modern Vertical Wizard Stepper Previous
     */
    modernVerticalPrevious() {
        this.modernVerticalWizardStepper.previous();
    }
    /**
     * On Submit
     */
    onSubmit() {
        alert('Submitted!!');
        return false;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Init
     */
    ngOnInit() {
        this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});
        this.verticalWizardStepper = new Stepper(document.querySelector('#stepper2'), {
            linear: false,
            animation: true
        });
        this.modernWizardStepper = new Stepper(document.querySelector('#stepper3'), {
            linear: false,
            animation: true
        });
        this.modernVerticalWizardStepper = new Stepper(document.querySelector('#stepper4'), {
            linear: false,
            animation: true
        });
        this.bsStepper = document.querySelectorAll('.bs-stepper');
        // content header
        this.contentHeader = {
            headerTitle: 'Form Wizard',
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
                        name: 'Forms',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Form Wizard',
                        isLink: false
                    }
                ]
            }
        };
    }
};
FormWizardComponent = __decorate([
    Component({
        selector: 'app-form-wizard',
        templateUrl: './form-wizard.component.html',
        styleUrls: ['./form-wizard.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], FormWizardComponent);
export { FormWizardComponent };
//# sourceMappingURL=form-wizard.component.js.map