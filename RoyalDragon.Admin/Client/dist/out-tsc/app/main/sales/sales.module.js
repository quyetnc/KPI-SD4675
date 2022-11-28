import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
// routing
const routes = [
    {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
    },
];
FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);
let SalesModule = class SalesModule {
};
SalesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, RouterModule.forChild(routes)]
    })
], SalesModule);
export { SalesModule };
//# sourceMappingURL=sales.module.js.map