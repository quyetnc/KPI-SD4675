import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'app/auth/helpers';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ProfileService } from 'app/main/pages/profile/profile.service';
import { ProfileComponent } from 'app/main/pages/profile/profile.component';
const routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        resolve: {
            profile: ProfileService
        }
    }
];
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    NgModule({
        declarations: [ProfileComponent],
        imports: [CommonModule, RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule],
        providers: [ProfileService]
    })
], ProfileModule);
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map