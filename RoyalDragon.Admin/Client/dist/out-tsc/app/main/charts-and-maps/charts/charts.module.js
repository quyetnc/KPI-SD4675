import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApexModule } from 'app/main/charts-and-maps/charts/apex/apex.module';
import { ChartjsModule } from 'app/main/charts-and-maps/charts/chartjs/chartjs.module';
let ChartModule = class ChartModule {
};
ChartModule = __decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, ApexModule, ChartjsModule]
    })
], ChartModule);
export { ChartModule };
//# sourceMappingURL=charts.module.js.map