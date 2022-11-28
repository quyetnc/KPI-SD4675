import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import * as snippet from 'app/main/charts-and-maps/google-maps/google-maps.snippetcode';
let GoogleMapsComponent = class GoogleMapsComponent {
    constructor() {
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeMarkerCirclePolygon = snippet.snippetCodeMarkerCirclePolygon;
        this._snippetCodeAdvance = snippet.snippetCodeAdvance;
        this._snippetCodeUserLocation = snippet.snippetCodeUserLocation;
        this._snippetCodeCustomIcon = snippet.snippetCodeCustomIcon;
        this._snippetCodeMarkerWithTooltip = snippet.snippetCodeMarkerWithTooltip;
        /**
         * Marker Circle Polygon Component
         */
        this.markerCirclePolygonCenter = { lat: 37.421995, lng: -122.084092 };
        this.markerCirclePolygonZoom = 15;
        this.mapCircleCenter = { lat: 37.421995, lng: -122.084092 };
        this.mapCircleOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            radius: 200,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            draggable: true,
            center: { lat: 37.421995, lng: -122.084092 }
        };
        // Define the LatLng coordinates for the polygon's  outer path.
        this.polygonCoords = [
            { lat: 37.421834, lng: -122.079971 },
            { lat: 37.421672, lng: -122.07273 },
            { lat: 37.419884, lng: -122.079213 }
        ];
        this.mapPolygonPaths = [this.polygonCoords];
        this.mapPolygonOptions = {
            strokeColor: '#3164bf',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            radius: 200,
            fillColor: '#3164bf',
            fillOpacity: 0.35,
            draggable: true,
            center: { lat: 37.421995, lng: -122.084092 }
        };
        /**
         * Advance Component
         */
        this.advanceZoom = 9;
        this.advanceCenter = { lat: 44.541012, lng: -78.547917 };
        this.advanceOptions = {
            maxZoom: 17,
            minZoom: 2
        };
        this.advanceRectangleBounds = {
            north: 44.599,
            south: 44.49,
            east: -78.443,
            west: -78.649
        };
        this.advanceRectangleOptions = { editable: true };
        /**
         * User Location Component
         */
        this.userLocationZoom = 15;
        /**
         * Custom Icons Component
         */
        this.customIconZoom = 13;
        this.customIconCenter = { lat: 37.421995, lng: -122.084092 };
        this.customIcon2Center = { lat: 37.431997, lng: -122.094097 };
        this.customIconPath = '/assets/images/misc/';
        this.customIconOptions = {
            icon: this.customIconPath + 'leaf-red.png'
        };
        this.customIcon2Options = {
            icon: this.customIconPath + 'leaf-green.png'
        };
        this.markerZoom = 12;
        this.streetZoom = 12;
        this.markerCenter = {
            lat: 47.4073,
            lng: 7.76
        };
        this.markers = [
            {
                position: {
                    lat: 47.4073,
                    lng: 7.76
                },
                options: {
                    draggable: true
                },
                label: 'A'
            },
            {
                position: {
                    lat: 47.3769,
                    lng: 7.7417
                },
                options: {
                    draggable: true
                },
                label: 'B'
            }
        ];
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Advance Component
     */
    zoomIn() {
        if (this.advanceZoom < this.advanceOptions.maxZoom)
            this.advanceZoom++;
    }
    zoomOut() {
        if (this.advanceZoom > this.advanceOptions.minZoom)
            this.advanceZoom--;
    }
    /**
     * Marker with Tooltip Component
     * @param marker
     */
    openInfo(marker) {
        this.infoWindow.open(marker);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Fetch Geolocation
        navigator.geolocation.getCurrentPosition(position => {
            this.userLocationCenter = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Google Maps',
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
                        name: 'Charts & Maps',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Google Maps',
                        isLink: false
                    }
                ]
            }
        };
    }
};
__decorate([
    ViewChild(MapInfoWindow, { static: false })
], GoogleMapsComponent.prototype, "infoWindow", void 0);
GoogleMapsComponent = __decorate([
    Component({
        selector: 'app-google-maps',
        templateUrl: './google-maps.component.html'
    })
], GoogleMapsComponent);
export { GoogleMapsComponent };
//# sourceMappingURL=google-maps.component.js.map