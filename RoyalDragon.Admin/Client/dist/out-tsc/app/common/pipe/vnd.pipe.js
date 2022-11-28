import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let VndPipe = class VndPipe {
    transform(value) {
        var vnd = value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return vnd;
    }
};
VndPipe = __decorate([
    Pipe({ name: 'vnd' })
], VndPipe);
export { VndPipe };
//# sourceMappingURL=vnd.pipe.js.map