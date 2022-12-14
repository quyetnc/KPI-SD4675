import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'app/auth/helpers/auth.guards';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { AccountSettingsComponent } from 'app/main/pages/account-settings/account-settings.component';
import { AccountSettingsService } from 'app/main/pages/account-settings/account-settings.service';
const routes = [
    {
        path: 'account-settings',
        component: AccountSettingsComponent,
        canActivate: [AuthGuard],
        resolve: {
            accountSetting: AccountSettingsService
        },
        data: { animation: 'account-settings' }
    }
];
let AccountSettingsModule = class AccountSettingsModule {
};
AccountSettingsModule = __decorate([
    NgModule({
        declarations: [AccountSettingsComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            NgbModule,
            CoreCommonModule,
            ContentHeaderModule,
            Ng2FlatpickrModule
        ],
        providers: [AccountSettingsService]
    })
], AccountSettingsModule);
export { AccountSettingsModule };
//# sourceMappingURL=account-settings.module.js.map