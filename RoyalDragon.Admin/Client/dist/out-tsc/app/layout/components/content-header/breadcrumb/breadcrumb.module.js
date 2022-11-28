import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = __decorate([
    NgModule({
        declarations: [BreadcrumbComponent],
        imports: [CommonModule, RouterModule.forChild([])],
        exports: [BreadcrumbComponent]
    })
], BreadcrumbModule);
export { BreadcrumbModule };
//# sourceMappingURL=breadcrumb.module.js.map