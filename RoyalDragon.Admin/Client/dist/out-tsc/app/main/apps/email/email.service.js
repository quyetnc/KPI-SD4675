import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let EmailService = class EmailService {
    /**
     *
     * @param {HttpClient} _httpClient
     * @param {Router} router
     */
    constructor(_httpClient, router) {
        this._httpClient = _httpClient;
        this.router = router;
        this.searchText = '';
        this.folderHandle = 'inbox';
        this.labelHandle = '';
        this.selectedEmails = [];
        this.isEmailDetailOpen = false;
        this.onEmailsChanged = new BehaviorSubject([]);
        this.onSelectedEmailsChanged = new BehaviorSubject([]);
        this.onOpenedEmailChanged = new BehaviorSubject([]);
        this.onFoldersChanged = new BehaviorSubject([]);
        this.onLabelsChanged = new BehaviorSubject([]);
        this.composeEmailChanged = new BehaviorSubject(false);
        this.onSearchTextChanged = new BehaviorSubject('');
        this.onDraftCountChanged = new BehaviorSubject([]);
        this.onUnreadInboxCountChanged = new BehaviorSubject([]);
        this.onEmailDetailChanged = new BehaviorSubject(false);
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        this.routeParams = route.params;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getFolders(),
                this.getLabels(),
                this.getEmails(),
                this.updateDraftCount(),
                this.updateUnreadCount()
            ]).then(() => {
                // close Opened email on router change
                this.closeEmailDetails();
                // deselect Selected emails on router change
                this.deselectEmails();
                resolve();
            }, reject);
        });
    }
    /**
     * Get Emails
     */
    getEmails() {
        if (this.routeParams.label) {
            return this.getEmailsByLabel(this.routeParams.label);
        }
        return this.getEmailsByFolder(this.routeParams.folder);
    }
    /**
     * Get Emails By Folder
     *
     * @param folderHandle
     * @returns {Promise<Email[]>}
     */
    getEmailsByFolder(folderHandle) {
        const apiUrl = 'api/emails-data?folder=' + folderHandle;
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                this.folderHandle = folderHandle;
                this.labelHandle = '';
                this.emails = response;
                this.tempEmails = response;
                this.onEmailsChanged.next(this.emails);
                if (folderHandle === 'inbox') {
                    this.updateUnreadCount();
                }
                resolve();
            }, reject);
        });
    }
    /**
     * Get Emails By Label
     *
     * @param labelHandle
     * @returns {Promise<Email[]>}
     */
    getEmailsByLabel(labelHandle) {
        const apiUrl = 'api/emails-data?labels=' + labelHandle;
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                this.labelHandle = labelHandle;
                this.folderHandle = '';
                this.emails = response;
                this.tempEmails = response;
                this.onEmailsChanged.next(this.emails);
                resolve();
            }, reject);
        });
    }
    /**
     * Get Folders
     *
     * @returns {Promise<Email[]>}
     */
    getFolders() {
        const apiUrl = 'api/email-folders';
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                this.folders = response;
                this.onFoldersChanged.next(this.folders);
                resolve();
            }, reject);
        });
    }
    /**
     * Get  Labels
     *
     * @returns {Promise<any>}
     */
    getLabels() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/email-labels').subscribe((response) => {
                this.labels = response;
                this.onLabelsChanged.next(this.labels);
                resolve(this.labels);
            }, reject);
        });
    }
    /**
     * Compose Email
     *
     * @param value
     */
    composeEmail(value) {
        this.composeEmailRef = value;
        this.composeEmailChanged.next(this.composeEmailRef);
    }
    /**
     * Set/Update Folder On Selected Emails
     *
     * @param folderId
     */
    updateFolderOnSelectedEmails(folderRef) {
        this.selectedEmails.map(email => {
            email.folder = folderRef;
            this.updateEmail(email);
        });
        this.deselectEmails();
        // close Opened email
        this.closeEmailDetails();
    }
    /**
     * Set/Update Labels On Selected Emails
     *
     * @param labelRef
     */
    updateLabelOnSelectedEmails(labelRef) {
        this.selectedEmails.map(email => {
            if (email.labels.indexOf(labelRef) === -1) {
                // If labelRef isn't in email labels add it
                email.labels.push(labelRef);
            }
            else {
                // If labelRef is in email labels remove it
                email.labels.splice(email.labels.indexOf(labelRef), 1);
            }
            this.updateEmail(email);
        });
    }
    /**
     * Get Draft Count
     *
     * @returns {Promise<Email[]>}
     */
    updateDraftCount() {
        const apiUrl = 'api/emails-data?folder=draft';
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                this.draftEmailsCount = response.length;
                this.onDraftCountChanged.next(this.draftEmailsCount);
                resolve();
            }, reject);
        });
    }
    /**
     * Update Un-read Emails Count
     *
     * @returns {Promise<Email[]>}
     */
    updateUnreadCount() {
        const apiUrl = 'api/emails-data?folder=inbox';
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                const emails = response;
                const unReadEmails = emails.filter(email => email.isRead === false);
                this.unReadInboxCount = unReadEmails.length;
                this.onUnreadInboxCountChanged.next(this.unReadInboxCount);
                resolve();
            }, reject);
        });
    }
    /**
     * Toggle select all
     */
    toggleSelectAll() {
        if (this.selectedEmails.length > 0) {
            this.deselectEmails();
        }
        else {
            this.selectEmails();
        }
    }
    /**
     * Select Emails
     *
     * @param filterParameter
     * @param filterValue
     */
    selectEmails() {
        this.selectedEmails = JSON.parse(JSON.stringify(this.emails));
        this.onSelectedEmailsChanged.next(this.selectedEmails);
    }
    /**
     * Deselect Emails
     */
    deselectEmails() {
        this.selectedEmails = [];
        // Trigger the next event
        this.onSelectedEmailsChanged.next(this.selectedEmails);
    }
    /**
     * Toggle Selected Email By Id
     *
     * @param id
     */
    toggleSelectedMail(id) {
        // First, check if we already have that Email as selected...
        if (this.selectedEmails.length > 0) {
            for (const email of this.selectedEmails) {
                // ...delete the unselected Email
                if (email.id === id) {
                    const index = this.selectedEmails.indexOf(email);
                    if (index !== -1) {
                        this.selectedEmails.splice(index, 1);
                        // Trigger the next event
                        this.onSelectedEmailsChanged.next(this.selectedEmails);
                        // Return
                        return;
                    }
                }
            }
        }
        // If we don't have it, push as selected
        this.selectedEmails.push(this.emails.find(email => {
            return email.id === id;
        }));
        // Trigger the next event
        this.onSelectedEmailsChanged.next(this.selectedEmails);
    }
    /**
     * Toggle Starred
     *
     * @param email
     */
    toggleStarred(email) {
        if (email.isStarred === false) {
            email.isStarred = true;
        }
        else {
            email.isStarred = false;
        }
        this.updateEmail(email);
    }
    /**
     * Update Email
     *
     * @param email
     * @returns {Promise<any>}
     */
    updateEmail(email) {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/emails-data/' + email.id, { ...email }).subscribe(response => {
                this.getEmails().then(emails => {
                    this.updateDraftCount();
                    resolve(emails);
                }, reject);
            });
        });
    }
    /**
     * Set/Update Opened Email
     *
     * @param openedEmail
     */
    setOpenedEmail(openedEmail) {
        this.selectedEmails = [];
        this.selectedEmails[0] = openedEmail;
        this.onSelectedEmailsChanged.next(this.selectedEmails);
    }
    /**
     * Set/Update Opened Email by id
     *
     * @param id
     */
    openEmailDetails(id) {
        this.openedEmail = this.emails.find(email => {
            return email.id === id;
        });
        this.onOpenedEmailChanged.next(this.openedEmail);
        // Set opened mail mark as read
        this.markAsRead(id);
    }
    /**
     * Close Email Details
     */
    closeEmailDetails() {
        this.isEmailDetailOpen = false;
        this.onEmailDetailChanged.next(this.isEmailDetailOpen);
    }
    /**
     * Read Email
     *
     * @param id
     */
    markAsRead(id) {
        this.selectedEmails.map(email => {
            if (email.id === id) {
                email.isRead = true;
            }
            this.updateEmail(email);
        });
    }
    /**
     * Un-read Email
     *
     */
    markAsUnread() {
        this.selectedEmails.map(email => {
            email.isRead = false;
            this.updateEmail(email);
            this.deselectEmails();
            // close Opened email
            this.closeEmailDetails();
        });
    }
    /**
     * Update SearchText & Route
     *
     * @param value
     */
    updateSearchText(value) {
        if (value !== undefined && value !== null) {
            if (this.labelHandle === '') {
                this.router.navigate(['apps/email/' + this.folderHandle], { queryParams: { q: value } });
            }
            else {
                this.router.navigate(['apps/email/label/' + this.labelHandle], { queryParams: { q: value } });
            }
            if (value === '' && this.labelHandle === '') {
                this.router.navigate(['apps/email/' + this.folderHandle], {});
            }
            else if (value === '' && this.labelHandle !== '') {
                this.router.navigate(['apps/email/label/' + this.labelHandle], {});
            }
            this.searchText = value.toLowerCase();
            this.getMailOnQuery(value);
        }
    }
    /**
     * Get Email On Query
     */
    getMailOnQuery(value) {
        const filteredMail = this.tempEmails.filter(email => {
            return email.subject.toLowerCase().includes(value);
        });
        this.emails = filteredMail;
        this.onEmailsChanged.next(this.emails);
    }
};
EmailService = __decorate([
    Injectable()
], EmailService);
export { EmailService };
//# sourceMappingURL=email.service.js.map