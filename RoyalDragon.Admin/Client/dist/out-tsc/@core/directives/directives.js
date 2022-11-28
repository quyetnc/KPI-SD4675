import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FeatherIconDirective } from '@core/directives/core-feather-icons/core-feather-icons';
import { RippleEffectDirective } from '@core/directives/core-ripple-effect/core-ripple-effect.directive';
let CoreDirectivesModule = class CoreDirectivesModule {
};
CoreDirectivesModule = __decorate([
    NgModule({
        declarations: [RippleEffectDirective, FeatherIconDirective],
        exports: [RippleEffectDirective, FeatherIconDirective]
    })
], CoreDirectivesModule);
export { CoreDirectivesModule };
//# sourceMappingURL=directives.js.map