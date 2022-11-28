import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { AvatarComponent } from 'app/main/components/avatar/avatar.component';
const routes = [
    {
        path: 'avatar',
        component: AvatarComponent,
        data: { animation: 'avatar' }
    }
];
let AvatarModule = class AvatarModule {
};
AvatarModule = __decorate([
    NgModule({
        declarations: [AvatarComponent],
        imports: [RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], AvatarModule);
export { AvatarModule };
//# sourceMappingURL=avatar.module.js.map