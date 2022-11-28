import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @param {string} key
     *
     * @returns {any}
     */
    transform(items, searchText, key) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it[key].toLowerCase().includes(searchText);
        });
    }
};
FilterPipe = __decorate([
    Pipe({
        name: 'filter'
    })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map