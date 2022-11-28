import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreSidebarModule } from '@core/components';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreCommonModule } from '@core/common.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill';
import { EmailComponent } from 'app/main/apps/email/email.component';
import { EmailService } from 'app/main/apps/email/email.service';
import { TranslateModule } from '@ngx-translate/core';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CsvModule } from '@ctrl/ngx-csv';
import { DatatablesService } from 'app/main/tables/datatables/datatables.service';
import { AccountSettingsService } from 'app/main/pages/account-settings/account-settings.service';
import { CostComponent } from './cost.component';
import { VndPipeModule } from 'app/common/pipe/vnd.pipe.module';

// routing
const routes: Routes = [
  {
    path: '',
    component: CostComponent,
    resolve: {
      datatables: DatatablesService,
      accountSetting: AccountSettingsService
    },
    data: { animation: 'CostComponent' }
  },
  {
    path: 'label/:label',
    component: EmailComponent,
    resolve: {
      email: EmailService
    },
    data: { animation: 'EmailComponent' }
  },
  {
    path: '**',
    redirectTo: 'inbox',
    data: { animation: 'EmailComponent' }
  }
];

@NgModule({
  declarations: [
    CostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    CoreCommonModule,
    NgbModule,
    NgSelectModule,
    QuillModule.forRoot(),
    CorePipesModule,
    CoreSidebarModule,
    NgbModule,
    TranslateModule,
    CoreCommonModule,
    ContentHeaderModule,
    CardSnippetModule,
    NgxDatatableModule,
    VndPipeModule,
    CsvModule
  ],
  providers: [EmailService, DatatablesService,AccountSettingsService]
})
export class CostModule { }
