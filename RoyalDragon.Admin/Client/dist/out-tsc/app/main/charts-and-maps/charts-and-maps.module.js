import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'app/main/charts-and-maps/charts/charts.module';
import { GoogleMapModule } from 'app/main/charts-and-maps/google-maps/google-maps.module';
let ChartsAndMapsModule = class ChartsAndMapsModule {
};
ChartsAndMapsModule = __decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, ChartModule, GoogleMapModule]
    })
], ChartsAndMapsModule);
export { ChartsAndMapsModule };
//# sourceMappingURL=charts-and-maps.module.js.map