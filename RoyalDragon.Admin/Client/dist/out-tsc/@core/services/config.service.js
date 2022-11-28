import { __decorate, __param } from "tslib";
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';
// Injection token for the core custom settings
export const CORE_CUSTOM_CONFIG = new InjectionToken('coreCustomConfig');
let CoreConfigService = class CoreConfigService {
    /**
     * Constructor
     *
     * @param _config
     * @param {Router} _router
     */
    constructor(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Get the config from local storage
        if (_config.layout.enableLocalStorage) {
            this.localConfig = JSON.parse(localStorage.getItem('config'));
        }
        else {
            localStorage.removeItem('config');
        }
        // Set the defaultConfig to localConfig if we have else appConfig (app-config.ts)
        this._defaultConfig = this.localConfig ? this.localConfig : _config;
        // Initialize the config service
        this._initConfig();
    }
    //  Accessors
    // -----------------------------------------------------------------------------------------------------
    // Set the config
    set config(data) {
        let config;
        // Set config = localConfig, If we have else defaultConfig
        if (this.localConfig) {
            config = this.localConfig;
        }
        else {
            config = this._configSubject.getValue();
        }
        // Merge provided data with config, and create new merged config
        config = _.merge({}, config, data);
        // Set config to local storage if enableLocalStorage parameter is true
        if (config.layout.enableLocalStorage) {
            localStorage.setItem('config', JSON.stringify(config));
        }
        // Inform the observers
        this._configSubject.next(config);
    }
    // Get the config
    get config() {
        return this._configSubject.asObservable();
    }
    /**
     * Get default config
     *
     * @returns {any}
     */
    get defaultConfig() {
        return this._defaultConfig;
    }
    // Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    _initConfig() {
        // Set the config from the default config
        this._configSubject = new BehaviorSubject(_.cloneDeep(this._defaultConfig));
        // On every RoutesRecognized event
        // Check if localDefault (localStorage if we have else defaultConfig) is different form the default one
        this._router.events.pipe(filter(event => event instanceof ResolveEnd)).subscribe(() => {
            // Get the local config from local storage
            this.localConfig = JSON.parse(localStorage.getItem('config'));
            // Set localDefault to localConfig if we have else defaultConfig
            let localDefault = this.localConfig ? this.localConfig : this._defaultConfig;
            // If localDefault is different form the provided config (page config)
            if (!_.isEqual(this._configSubject.getValue().layout, localDefault.layout)) {
                // Clone the current config
                const config = _.cloneDeep(this._configSubject.getValue());
                // Reset the layout from the default config
                config.layout = _.cloneDeep(localDefault.layout);
                // Set the config
                this._configSubject.next(config);
            }
        });
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Set config
     *
     * @param data
     * @param {{emitEvent: boolean}} param
     */
    setConfig(data, param = { emitEvent: true }) {
        let config;
        // Set config = localConfig, If we have else defaultConfig
        this.localConfig = JSON.parse(localStorage.getItem('config'));
        if (this.localConfig) {
            config = this.localConfig;
        }
        else {
            config = this._configSubject.getValue();
        }
        // Merge provided value with config, and create new merged config
        config = _.merge({}, config, data);
        // Set config to local storage if enableLocalStorage parameter is true
        if (config.layout.enableLocalStorage) {
            localStorage.setItem('config', JSON.stringify(config));
        }
        // If emitEvent option is true...
        if (param.emitEvent === true) {
            // Inform the observers
            this._configSubject.next(config);
        }
    }
    /**
     * Get config
     *
     * @returns {Observable<any>}
     */
    getConfig() {
        return this._configSubject.asObservable();
    }
    /**
     * Reset to the default config
     */
    resetConfig() {
        this._configSubject.next(_.cloneDeep(this._defaultConfig));
    }
};
CoreConfigService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(1, Inject(CORE_CUSTOM_CONFIG))
], CoreConfigService);
export { CoreConfigService };
//# sourceMappingURL=config.service.js.map