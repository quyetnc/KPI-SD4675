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
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
    }
];
FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);
let ManagesModule = class ManagesModule {
};
ManagesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, RouterModule.forChild(routes)]
    })
], ManagesModule);
export { ManagesModule };
//# sourceMappingURL=manages.module.js.map