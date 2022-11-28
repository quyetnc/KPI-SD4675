import { __decorate } from "tslib";
import { Component, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let NavbarComponent = class NavbarComponent {
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {AuthenticationService} _authenticationService
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreSidebarService} _coreSidebarService
     * @param {CoreMediaService} _coreMediaService
     * @param {MediaObserver} _mediaObserver
     * @param {TranslateService} _translateService
     */
    constructor(_router, _authenticationService, _coreConfigService, _coreMediaService, _coreSidebarService, _mediaObserver, _translateService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
        this._coreConfigService = _coreConfigService;
        this._coreMediaService = _coreMediaService;
        this._coreSidebarService = _coreSidebarService;
        this._mediaObserver = _mediaObserver;
        this._translateService = _translateService;
        this.isFixed = false;
        this.windowScrolled = false;
        this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));
        this.languageOptions = {
            en: {
                title: 'English',
                flag: 'us'
            },
            fr: {
                title: 'French',
                flag: 'fr'
            },
            de: {
                title: 'German',
                flag: 'de'
            },
            pt: {
                title: 'Portuguese',
                flag: 'pt'
            },
            vn: {
                title: 'Việt Nam',
                flag: 'vn'
            }
        };
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    // Add .navbar-static-style-on-scroll on scroll using HostListener & HostBinding
    onWindowScroll() {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) &&
            this.coreConfig.layout.navbar.type == 'navbar-static-top' &&
            this.coreConfig.layout.type == 'horizontal') {
            this.windowScrolled = true;
        }
        else if ((this.windowScrolled && window.pageYOffset) ||
            document.documentElement.scrollTop ||
            document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebar(key) {
        this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
    /**
     * Set the language
     *
     * @param language
     */
    setLanguage(language) {
        // Set the selected language for the navbar on change
        this.selectedLanguage = language;
        // Use the selected language id for translations
        this._translateService.use(language);
        this._coreConfigService.setConfig({ app: { appLanguage: language } }, { emitEvent: true });
    }
    /**
     * Toggle Dark Skin
     */
    toggleDarkSkin() {
        // Get the current skin
        this._coreConfigService
            .getConfig()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(config => {
            this.currentSkin = config.layout.skin;
        });
        // Toggle Dark skin with prevSkin skin
        this.prevSkin = localStorage.getItem('prevSkin');
        if (this.currentSkin === 'dark') {
            this._coreConfigService.setConfig({ layout: { skin: this.prevSkin ? this.prevSkin : 'default' } }, { emitEvent: true });
        }
        else {
            localStorage.setItem('prevSkin', this.currentSkin);
            this._coreConfigService.setConfig({ layout: { skin: 'dark' } }, { emitEvent: true });
        }
    }
    /**
     * Logout method
     */
    logout() {
        this._authenticationService.logout();
        this._router.navigate(['/login']);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // get the currentUser details from localStorage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // Subscribe to the config changes
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this.coreConfig = config;
            this.horizontalMenu = config.layout.type === 'horizontal';
            this.hiddenMenu = config.layout.menu.hidden === true;
            this.currentSkin = config.layout.skin;
            // Fix: for vertical layout if default navbar fixed-top than set isFixed = true
            if (this.coreConfig.layout.type === 'vertical') {
                setTimeout(() => {
                    if (this.coreConfig.layout.navbar.type === 'fixed-top') {
                        this.isFixed = true;
                    }
                }, 0);
            }
        });
        // Horizontal Layout Only: Add class fixed-top to navbar below large screen
        if (this.coreConfig.layout.type == 'horizontal') {
            // On every media(screen) change
            this._coreMediaService.onMediaUpdate.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
                const isFixedTop = this._mediaObserver.isActive('bs-gt-xl');
                if (isFixedTop) {
                    this.isFixed = false;
                }
                else {
                    this.isFixed = true;
                }
            });
        }
        // Set the selected language from default languageOptions
        this.selectedLanguage = _.find(this.languageOptions, {
            id: this._translateService.currentLang
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
};
__decorate([
    HostBinding('class.fixed-top')
], NavbarComponent.prototype, "isFixed", void 0);
__decorate([
    HostBinding('class.navbar-static-style-on-scroll')
], NavbarComponent.prototype, "windowScrolled", void 0);
__decorate([
    HostListener('window:scroll', [])
], NavbarComponent.prototype, "onWindowScroll", null);
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map