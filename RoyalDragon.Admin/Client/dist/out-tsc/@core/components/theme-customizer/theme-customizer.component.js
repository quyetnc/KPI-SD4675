import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let CoreThemeCustomizerComponent = class CoreThemeCustomizerComponent {
    /**
     * Constructor
  
     * @param {FormBuilder} _formBuilder
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreSidebarService} _coreSidebarService
     * */
    constructor(_formBuilder, _coreConfigService, _coreSidebarService) {
        this._formBuilder = _formBuilder;
        this._coreConfigService = _coreConfigService;
        this._coreSidebarService = _coreSidebarService;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    //  Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Build theme config form
        this.form = this._formBuilder.group({
            app: this._formBuilder.group({
                appName: new UntypedFormControl(),
                appTitle: new UntypedFormControl(),
                appLogoImage: new UntypedFormControl(),
                appLanguage: new UntypedFormControl()
            }),
            layout: this._formBuilder.group({
                skin: new UntypedFormControl(),
                type: new UntypedFormControl(),
                animation: new UntypedFormControl(),
                menu: this._formBuilder.group({
                    hidden: new UntypedFormControl(),
                    collapsed: new UntypedFormControl()
                }),
                navbar: this._formBuilder.group({
                    hidden: new UntypedFormControl(),
                    type: new UntypedFormControl(),
                    background: new UntypedFormControl(),
                    customBackgroundColor: new UntypedFormControl(),
                    backgroundColor: new UntypedFormControl()
                }),
                footer: this._formBuilder.group({
                    hidden: new UntypedFormControl(),
                    type: new UntypedFormControl(),
                    background: new UntypedFormControl(),
                    customBackgroundColor: new UntypedFormControl(),
                    backgroundColor: new UntypedFormControl()
                }),
                enableLocalStorage: new UntypedFormControl(),
                customizer: new UntypedFormControl(),
                scrollTop: new UntypedFormControl(),
                buyNow: new UntypedFormControl()
            })
        });
        // Subscribe to the config changes
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            // Update config
            this.coreConfig = config;
            // Set the config form values
            this.form.setValue(config, { emitEvent: false });
        });
        // Subscribe to the form layout.type value changes
        this.form
            .get('layout.type')
            .valueChanges.pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
            this._resetFormValues(value);
        });
        // Subscribe to the form value changes
        this.form.valueChanges.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this._coreConfigService.config = config;
        });
        // Set navbar color
        this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    //  Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Reset form values based on the selected menu layout
     *
     * @param value
     * @private
     */
    _resetFormValues(value) {
        switch (value) {
            case 'vertical': {
                this.form.patchValue({
                    layout: {
                        // skin: 'default',
                        animation: 'fadeIn',
                        menu: {
                            hidden: false,
                            collapsed: false
                        },
                        navbar: {
                            hidden: false,
                            type: 'floating-nav',
                            background: 'navbar-light',
                            customBackgroundColor: true,
                            backgroundColor: ''
                        },
                        footer: {
                            hidden: false,
                            type: 'footer-static',
                            background: 'footer-light',
                            customBackgroundColor: false,
                            backgroundColor: 'bg-primary'
                        }
                    }
                });
            }
            case 'horizontal': {
                this.form.patchValue({
                    layout: {
                        // skin: 'default',
                        animation: 'fadeIn',
                        menu: {
                            hidden: false,
                            collapsed: false
                        },
                        navbar: {
                            hidden: false,
                            type: 'floating-nav',
                            background: 'navbar-light',
                            customBackgroundColor: true,
                            backgroundColor: ''
                        },
                        footer: {
                            hidden: false,
                            type: 'footer-static',
                            background: 'footer-light',
                            customBackgroundColor: false,
                            backgroundColor: 'bg-primary'
                        }
                    }
                });
            }
        }
        // Set navbar color
        this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Patch selected navbar color value to form
     *
     * @param value
     */
    navbarColor(value) {
        this.navbarColorValue = value;
        this.form.patchValue({
            layout: { navbar: { customBackgroundColor: true, backgroundColor: this.navbarColorValue } }
        });
    }
    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebar(key) {
        this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
};
CoreThemeCustomizerComponent = __decorate([
    Component({
        selector: 'core-theme-customizer',
        templateUrl: './theme-customizer.component.html',
        styleUrls: ['./theme-customizer.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], CoreThemeCustomizerComponent);
export { CoreThemeCustomizerComponent };
//# sourceMappingURL=theme-customizer.component.js.map