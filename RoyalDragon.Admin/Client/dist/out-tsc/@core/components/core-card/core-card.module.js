import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { CoreCommonModule } from '@core/common.module';
import { CoreCardComponent } from '@core/components/core-card/core-card.component';
import { CoreBlockUiComponent } from '@core/components/core-card/core-block-ui/core-block-ui.component';
let CoreCardModule = class CoreCardModule {
};
CoreCardModule = __decorate([
    NgModule({
        declarations: [CoreCardComponent, CoreBlockUiComponent],
        imports: [CommonModule, NgbModule, BlockUIModule.forRoot({ template: CoreBlockUiComponent }), CoreCommonModule],
        exports: [CoreCardComponent]
    })
], CoreCardModule);
export { CoreCardModule };
//# sourceMappingURL=core-card.module.js.map