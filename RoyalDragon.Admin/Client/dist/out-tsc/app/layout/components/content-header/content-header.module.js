import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { BreadcrumbModule } from 'app/layout/components/content-header/breadcrumb/breadcrumb.module';
import { ContentHeaderComponent } from 'app/layout/components/content-header/content-header.component';
let ContentHeaderModule = class ContentHeaderModule {
};
ContentHeaderModule = __decorate([
    NgModule({
        declarations: [ContentHeaderComponent],
        imports: [CommonModule, RouterModule, CoreCommonModule, BreadcrumbModule, NgbModule],
        exports: [ContentHeaderComponent]
    })
], ContentHeaderModule);
export { ContentHeaderModule };
//# sourceMappingURL=content-header.module.js.map