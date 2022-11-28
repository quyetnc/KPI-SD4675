import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventRef } from 'app/main/apps/calendar/calendar.model';
let CalendarService = class CalendarService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.onEventChange = new BehaviorSubject({});
        this.onCurrentEventChange = new BehaviorSubject({});
        this.onCalendarChange = new BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([this.getEvents(), this.getCalendar()]).then(res => {
                resolve(res);
            }, reject);
        });
    }
    /**
     * Get Events
     */
    getEvents() {
        const url = `api/calendar-events`;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url).subscribe((response) => {
                this.events = response;
                this.tempEvents = response;
                this.onEventChange.next(this.events);
                resolve(this.events);
            }, reject);
        });
    }
    /**
     * Get Calendar
     */
    getCalendar() {
        const url = `api/calendar-filter`;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url).subscribe((response) => {
                this.calendar = response;
                this.onCalendarChange.next(this.calendar);
                resolve(this.calendar);
            }, reject);
        });
    }
    /**
     * Create New Event
     */
    createNewEvent() {
        this.currentEvent = {};
        this.onCurrentEventChange.next(this.currentEvent);
    }
    /**
     * Calendar Update
     *
     * @param calendars
     */
    calendarUpdate(calendars) {
        const calendarsChecked = calendars.filter(calendar => {
            return calendar.checked === true;
        });
        let calendarRef = [];
        calendarsChecked.map(res => {
            calendarRef.push(res.filter);
        });
        let filteredCalendar = this.tempEvents.filter(event => calendarRef.includes(event.calendar));
        this.events = filteredCalendar;
        this.onEventChange.next(this.events);
    }
    /**
     * Delete Event
     *
     * @param event
     */
    deleteEvent(event) {
        return new Promise((resolve, reject) => {
            this._httpClient.delete('api/calendar-events/' + event.id).subscribe(response => {
                this.getEvents();
                resolve(response);
            }, reject);
        });
    }
    /**
     * Add Event
     *
     * @param eventForm
     */
    addEvent(eventForm) {
        const newEvent = new EventRef();
        newEvent.url = eventForm.url;
        newEvent.title = eventForm.title;
        newEvent.start = eventForm.start;
        newEvent.end = eventForm.end;
        newEvent.allDay = eventForm.allDay;
        newEvent.calendar = eventForm.selectlabel;
        newEvent.extendedProps.location = eventForm.location;
        newEvent.extendedProps.description = eventForm.description;
        newEvent.extendedProps.addGuest = eventForm.addGuest;
        this.currentEvent = newEvent;
        this.onCurrentEventChange.next(this.currentEvent);
        this.postNewEvent();
    }
    /**
     * Update Event
     *
     * @param eventRef
     */
    updateCurrentEvent(eventRef) {
        const newEvent = new EventRef();
        newEvent.allDay = eventRef.event.allDay;
        newEvent.id = parseInt(eventRef.event.id);
        newEvent.url = eventRef.event.url;
        newEvent.title = eventRef.event.title;
        newEvent.start = eventRef.event.start;
        newEvent.end = eventRef.event.end;
        newEvent.calendar = eventRef.event.extendedProps.calendar;
        newEvent.extendedProps.location = eventRef.event.extendedProps.location;
        newEvent.extendedProps.description = eventRef.event.extendedProps.description;
        newEvent.extendedProps.addGuest = eventRef.event.extendedProps.addGuest;
        this.currentEvent = newEvent;
        this.onCurrentEventChange.next(this.currentEvent);
    }
    /**
     * Post New Event
     */
    postNewEvent() {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/calendar-events/', this.currentEvent).subscribe(response => {
                this.getEvents();
                resolve(response);
            }, reject);
        });
    }
    /**
     * Post Updated Event
     *
     * @param event
     */
    postUpdatedEvent(event) {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/calendar-events/' + event.id, { ...event }).subscribe(response => {
                this.getEvents();
                resolve(response);
            }, reject);
        });
    }
};
CalendarService = __decorate([
    Injectable()
], CalendarService);
export { CalendarService };
//# sourceMappingURL=calendar.service.js.map