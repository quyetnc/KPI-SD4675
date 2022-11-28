import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { TableModule } from 'app/main/tables/table/table.module';
import { DatatablesModule } from 'app/main/tables/datatables/datatables.module';
let TablesModule = class TablesModule {
};
TablesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [DatatablesModule, TableModule]
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=tables.module.js.map