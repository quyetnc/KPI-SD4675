import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let InitialsPipe = class InitialsPipe {
    transform(fullName) {
        return fullName
            ?.split(' ')
            .map(n => n[0])
            .join('');
    }
};
InitialsPipe = __decorate([
    Pipe({
        name: 'initials'
    })
], InitialsPipe);
export { InitialsPipe };
//# sourceMappingURL=initials.pipe.js.map