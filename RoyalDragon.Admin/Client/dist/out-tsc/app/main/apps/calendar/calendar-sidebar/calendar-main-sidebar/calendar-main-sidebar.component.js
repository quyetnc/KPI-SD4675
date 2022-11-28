import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let CalendarMainSidebarComponent = class CalendarMainSidebarComponent {
    /**
     * Constructor
     *
     * @param {CoreSidebarService} _coreSidebarService
     * @param {CalendarService} _calendarService
     */
    constructor(_coreSidebarService, _calendarService) {
        this._coreSidebarService = _coreSidebarService;
        this._calendarService = _calendarService;
        // Public
        this.calendarRef = [];
        this.tempRef = [];
        this.checkAll = true;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle Event Sidebar
     */
    toggleEventSidebar() {
        this._coreSidebarService.getSidebarRegistry('calendar-event-sidebar').toggleOpen();
    }
    /**
     * Add Event
     *
     */
    AddEvent() {
        this.toggleEventSidebar();
        this._coreSidebarService.getSidebarRegistry('calendar-main-sidebar').toggleOpen();
        this._calendarService.createNewEvent();
    }
    /**
     * If all checkbox are checked : returns TRUE
     */
    allChecked() {
        return this.calendarRef.every(v => v.checked === true);
    }
    /**
     * Checkbox Change
     *
     * @param event
     * @param id
     */
    checkboxChange(event, id) {
        const index = this.calendarRef.findIndex(r => {
            if (r.id === id) {
                return id;
            }
        });
        this.calendarRef[index].checked = event.target.checked;
        this._calendarService.calendarUpdate(this.calendarRef);
        this.checkAll = this.allChecked();
    }
    /**
     * Toggle All Checkbox
     *
     * @param event
     */
    toggleCheckboxAll(event) {
        this.checkAll = event.target.checked;
        if (this.checkAll) {
            this.calendarRef.map(res => {
                res.checked = true;
            });
        }
        else {
            this.calendarRef.map(res => {
                res.checked = false;
            });
        }
        this._calendarService.calendarUpdate(this.calendarRef);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Calendar changes
        this._calendarService.onCalendarChange.subscribe(res => {
            this.calendarRef = res;
        });
    }
};
CalendarMainSidebarComponent = __decorate([
    Component({
        selector: 'app-calendar-main-sidebar',
        templateUrl: './calendar-main-sidebar.component.html',
        encapsulation: ViewEncapsulation.None
    })
], CalendarMainSidebarComponent);
export { CalendarMainSidebarComponent };
//# sourceMappingURL=calendar-main-sidebar.component.js.map