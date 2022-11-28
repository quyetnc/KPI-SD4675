import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreTouchspinComponent } from '@core/components/core-touchspin/core-touchspin.component';
import { CoreCommonModule } from '@core/common.module';
let CoreTouchspinModule = class CoreTouchspinModule {
};
CoreTouchspinModule = __decorate([
    NgModule({
        declarations: [CoreTouchspinComponent],
        imports: [CommonModule, FormsModule, CoreCommonModule],
        exports: [CoreTouchspinComponent]
    })
], CoreTouchspinModule);
export { CoreTouchspinModule };
//# sourceMappingURL=core-touchspin.module.js.map