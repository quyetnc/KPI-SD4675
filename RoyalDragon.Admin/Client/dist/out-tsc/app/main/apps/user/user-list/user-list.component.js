import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let UserListComponent = class UserListComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {UserListService} _userListService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_userListService, _coreSidebarService, _coreConfigService) {
        this._userListService = _userListService;
        this._coreSidebarService = _coreSidebarService;
        this._coreConfigService = _coreConfigService;
        // Public
        this.sidebarToggleRef = false;
        this.selectedOption = 10;
        this.ColumnMode = ColumnMode;
        this.temp = [];
        this.previousRoleFilter = '';
        this.previousPlanFilter = '';
        this.previousStatusFilter = '';
        this.selectRole = [
            { name: 'All', value: '' },
            { name: 'Admin', value: 'Admin' },
            { name: 'Author', value: 'Author' },
            { name: 'Editor', value: 'Editor' },
            { name: 'Maintainer', value: 'Maintainer' },
            { name: 'Subscriber', value: 'Subscriber' }
        ];
        this.selectPlan = [
            { name: 'All', value: '' },
            { name: 'Basic', value: 'Basic' },
            { name: 'Company', value: 'Company' },
            { name: 'Enterprise', value: 'Enterprise' },
            { name: 'Team', value: 'Team' }
        ];
        this.selectStatus = [
            { name: 'All', value: '' },
            { name: 'Pending', value: 'Pending' },
            { name: 'Active', value: 'Active' },
            { name: 'Inactive', value: 'Inactive' }
        ];
        this.selectedRole = [];
        this.selectedPlan = [];
        this.selectedStatus = [];
        this.searchValue = '';
        // Private
        this.tempData = [];
        this._unsubscribeAll = new Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * filterUpdate
     *
     * @param event
     */
    filterUpdate(event) {
        // Reset ng-select on search
        this.selectedRole = this.selectRole[0];
        this.selectedPlan = this.selectPlan[0];
        this.selectedStatus = this.selectStatus[0];
        const val = event.target.value.toLowerCase();
        // Filter Our Data
        const temp = this.tempData.filter(function (d) {
            return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // Update The Rows
        this.rows = temp;
        // Whenever The Filter Changes, Always Go Back To The First Page
        this.table.offset = 0;
    }
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    /**
     * Filter By Roles
     *
     * @param event
     */
    filterByRole(event) {
        const filter = event ? event.value : '';
        this.previousRoleFilter = filter;
        this.temp = this.filterRows(filter, this.previousPlanFilter, this.previousStatusFilter);
        this.rows = this.temp;
    }
    /**
     * Filter By Plan
     *
     * @param event
     */
    filterByPlan(event) {
        const filter = event ? event.value : '';
        this.previousPlanFilter = filter;
        this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
        this.rows = this.temp;
    }
    /**
     * Filter By Status
     *
     * @param event
     */
    filterByStatus(event) {
        const filter = event ? event.value : '';
        this.previousStatusFilter = filter;
        this.temp = this.filterRows(this.previousRoleFilter, this.previousPlanFilter, filter);
        this.rows = this.temp;
    }
    /**
     * Filter Rows
     *
     * @param roleFilter
     * @param planFilter
     * @param statusFilter
     */
    filterRows(roleFilter, planFilter, statusFilter) {
        // Reset search on select change
        this.searchValue = '';
        roleFilter = roleFilter.toLowerCase();
        planFilter = planFilter.toLowerCase();
        statusFilter = statusFilter.toLowerCase();
        return this.tempData.filter(row => {
            const isPartialNameMatch = row.role.toLowerCase().indexOf(roleFilter) !== -1 || !roleFilter;
            const isPartialGenderMatch = row.currentPlan.toLowerCase().indexOf(planFilter) !== -1 || !planFilter;
            const isPartialStatusMatch = row.status.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
            return isPartialNameMatch && isPartialGenderMatch && isPartialStatusMatch;
        });
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe config change
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
            if (config.layout.animation === 'zoomIn') {
                setTimeout(() => {
                    this._userListService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
                        this.rows = response;
                        this.tempData = this.rows;
                    });
                }, 450);
            }
            else {
                this._userListService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
                    this.rows = response;
                    this.tempData = this.rows;
                });
            }
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
    ViewChild(DatatableComponent)
], UserListComponent.prototype, "table", void 0);
UserListComponent = __decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map