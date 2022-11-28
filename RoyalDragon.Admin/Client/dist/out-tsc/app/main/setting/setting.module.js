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
        path: 'shop',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    },
    {
        path: 'cost',
        loadChildren: () => import('./cost/cost.module').then(m => m.CostModule)
    },
];
FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);
let SettingModule = class SettingModule {
};
SettingModule = __decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, RouterModule.forChild(routes)]
    })
], SettingModule);
export { SettingModule };
//# sourceMappingURL=setting.module.js.map