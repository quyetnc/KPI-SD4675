import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreSidebarModule } from '@core/components';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { EmailComponent } from 'app/main/apps/email/email.component';
import { EmailService } from 'app/main/apps/email/email.service';
import { CustomerComponent } from './customer.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CsvModule } from '@ctrl/ngx-csv';
import { DatatablesService } from 'app/main/tables/datatables/datatables.service';
import { AddEditCustomerDialogComponent } from './add-edit-customer-dialog/add-edit-customer-dialog.component';
import { OrderByCustomerComponent } from './order-by-customer/order-by-customer.component';
import { InfoOrderOfCustomerComponent } from './info-order-of-customer/info-order-of-customer.component';
import { DetailOfOrderComponent } from './info-order-of-customer/detail-of-order/detail-of-order.component';
import { VndPipeModule } from 'app/common/pipe/vnd.pipe.module';
// routing
const routes = [
    {
        path: '',
        component: CustomerComponent,
        resolve: {
            datatables: DatatablesService
        },
        data: { animation: 'CustomerComponent' }
    },
    {
        path: 'label/:label',
        component: EmailComponent,
        resolve: {
            email: EmailService
        },
        data: { animation: 'EmailComponent' }
    },
    {
        path: '**',
        redirectTo: 'inbox',
        data: { animation: 'EmailComponent' }
    }
];
let CustomerModule = class CustomerModule {
};
CustomerModule = __decorate([
    NgModule({
        declarations: [
            CustomerComponent,
            AddEditCustomerDialogComponent,
            OrderByCustomerComponent,
            InfoOrderOfCustomerComponent,
            DetailOfOrderComponent
        ],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            CoreCommonModule,
            VndPipeModule,
            NgbModule,
            NgSelectModule,
            QuillModule.forRoot(),
            CorePipesModule,
            CoreSidebarModule,
            NgbModule,
            CoreCommonModule,
            ContentHeaderModule,
            CardSnippetModule,
            NgxDatatableModule,
            CsvModule
        ],
        providers: [EmailService, DatatablesService]
    })
], CustomerModule);
export { CustomerModule };
//# sourceMappingURL=customer.module.js.map