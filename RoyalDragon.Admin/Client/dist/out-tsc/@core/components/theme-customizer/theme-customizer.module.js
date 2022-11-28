import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CoreSidebarModule } from '@core/components/core-sidebar/core-sidebar.module';
import { CoreThemeCustomizerComponent } from '@core/components/theme-customizer/theme-customizer.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
let CoreThemeCustomizerModule = class CoreThemeCustomizerModule {
};
CoreThemeCustomizerModule = __decorate([
    NgModule({
        declarations: [CoreThemeCustomizerComponent],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            FlexLayoutModule,
            PerfectScrollbarModule,
            CoreDirectivesModule,
            CoreSidebarModule
        ],
        providers: [
            {
                provide: PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ],
        exports: [CoreThemeCustomizerComponent]
    })
], CoreThemeCustomizerModule);
export { CoreThemeCustomizerModule };
//# sourceMappingURL=theme-customizer.module.js.map