import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let NotificationsService = class NotificationsService {
    /**
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Public
        this.apiData = [];
        this.onApiDataChange = new BehaviorSubject('');
        this.getNotificationsData();
    }
    /**
     * Get Notifications Data
     */
    getNotificationsData() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/notifications-data').subscribe((response) => {
                this.apiData = response;
                this.onApiDataChange.next(this.apiData);
                resolve(this.apiData);
            }, reject);
        });
    }
};
NotificationsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NotificationsService);
export { NotificationsService };
//# sourceMappingURL=notifications.service.js.map