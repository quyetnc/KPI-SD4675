import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let StripHtmlPipe = class StripHtmlPipe {
    transform(value) {
        return value.replace(/<.*?>/g, ''); // replace tags
    }
};
StripHtmlPipe = __decorate([
    Pipe({
        name: 'striphtml'
    })
], StripHtmlPipe);
export { StripHtmlPipe };
//# sourceMappingURL=stripHtml.pipe.js.map