import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as snippet from 'app/main/forms/form-validation/form-validation.snippetcode';
import { MustMatch } from './_helpers/must-match.validator';
let FormValidationComponent = class FormValidationComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this._snippetCodeTDsimpleValidation = snippet.snippetCodeTDsimpleValidation;
        this._snippetCodeTDMultiRuleValidation = snippet.snippetCodeTDMultiRuleValidation;
        this._snippetCodeInputValidation = snippet.snippetCodeInputValidation;
        this._snippetCodeReactiveForms = snippet.snippetCodeReactiveForms;
        this.ReactiveUDFormSubmitted = false;
        // Reactive User Details form data
        this.UDForm = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confPassword: '',
            age: '',
            phoneNumber: ''
        };
    }
    // getter for easy access to form fields
    get ReactiveUDForm() {
        return this.ReactiveUserDetailsForm.controls;
    }
    ReactiveUDFormOnSubmit() {
        this.ReactiveUDFormSubmitted = true;
        // stop here if form is invalid
        if (this.ReactiveUserDetailsForm.invalid) {
            return;
        }
        console.log(this.ReactiveUserDetailsForm.value);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ReactiveUserDetailsForm.value));
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Form Validation',
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
                        name: 'Form Validation',
                        isLink: false
                    }
                ]
            }
        };
        // Reactive form initialization
        this.ReactiveUserDetailsForm = this.formBuilder.group({
            userName: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confPassword: ['', [Validators.required, Validators.minLength(6)]],
            country: ['', [Validators.required]],
            language: ['', [Validators.required]],
            age: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required]]
        }, {
            validator: MustMatch('password', 'confPassword')
        });
    }
};
FormValidationComponent = __decorate([
    Component({
        selector: 'app-form-validation',
        templateUrl: './form-validation.component.html'
    })
], FormValidationComponent);
export { FormValidationComponent };
//# sourceMappingURL=form-validation.component.js.map