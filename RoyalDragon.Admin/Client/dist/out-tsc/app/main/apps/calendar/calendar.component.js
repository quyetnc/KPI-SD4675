import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EventRef } from 'app/main/apps/calendar/calendar.model';
let CalendarComponent = class CalendarComponent {
    /**
     * Constructor
     *
     * @param {CoreSidebarService} _coreSidebarService
     * @param {CalendarService} _calendarService
     * @param {CoreConfigService} _coreConfigService
     */
    constructor(_coreSidebarService, _calendarService, _coreConfigService) {
        this._coreSidebarService = _coreSidebarService;
        this._calendarService = _calendarService;
        this._coreConfigService = _coreConfigService;
        // Public
        this.slideoutShow = false;
        this.events = [];
        this.calendarOptions = {
            headerToolbar: {
                start: 'sidebarToggle, prev,next, title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            initialView: 'dayGridMonth',
            initialEvents: this.events,
            weekends: true,
            editable: true,
            eventResizableFromStart: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: 2,
            navLinks: true,
            eventClick: this.handleUpdateEventClick.bind(this),
            eventClassNames: this.eventClass.bind(this),
            select: this.handleDateSelect.bind(this)
        };
        this._unsubscribeAll = new Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Add Event Class
     *
     * @param s
     */
    eventClass(s) {
        const calendarsColor = {
            Business: 'primary',
            Holiday: 'success',
            Personal: 'danger',
            Family: 'warning',
            ETC: 'info'
        };
        const colorName = calendarsColor[s.event._def.extendedProps.calendar];
        return `bg-light-${colorName}`;
    }
    /**
     * Update Event
     *
     * @param eventRef
     */
    handleUpdateEventClick(eventRef) {
        this._coreSidebarService.getSidebarRegistry('calendar-event-sidebar').toggleOpen();
        this._calendarService.updateCurrentEvent(eventRef);
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
     * Date select Event
     *
     * @param eventRef
     */
    handleDateSelect(eventRef) {
        const newEvent = new EventRef();
        newEvent.start = eventRef.start;
        this._coreSidebarService.getSidebarRegistry('calendar-event-sidebar').toggleOpen();
        this._calendarService.onCurrentEventChange.next(newEvent);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe config change
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            // ! If we have zoomIn route Transition then load calendar after 450ms(Transition will finish in 400ms)
            if (config.layout.animation === 'zoomIn') {
                setTimeout(() => {
                    // Subscribe to Event Change
                    this._calendarService.onEventChange.subscribe(res => {
                        this.events = res;
                        this.calendarOptions.events = res;
                    });
                }, 450);
            }
            else {
                // Subscribe to Event Change
                this._calendarService.onEventChange.subscribe(res => {
                    this.events = res;
                    this.calendarOptions.events = res;
                });
            }
        });
        this._calendarService.onCurrentEventChange.subscribe(res => {
            this.event = res;
        });
    }
    /**
     * Calendar's custom button on click toggle sidebar
     */
    ngAfterViewInit() {
        // Store this to _this as we need it on click event to call toggleSidebar
        let _this = this;
        this.calendarOptions.customButtons = {
            sidebarToggle: {
                text: '',
                click() {
                    _this.toggleSidebar('calendar-main-sidebar');
                }
            }
        };
    }
};
CalendarComponent = __decorate([
    Component({
        selector: 'app-calendar',
        templateUrl: './calendar.component.html',
        styleUrls: ['./calendar.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], CalendarComponent);
export { CalendarComponent };
//# sourceMappingURL=calendar.component.js.map