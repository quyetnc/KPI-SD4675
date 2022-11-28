import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@fake-db/fake-db.service';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { ContextMenuModule } from '@ctrl/ngx-rightclick';
import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { coreConfig } from 'app/app-config';
import { AuthGuard } from 'app/auth/helpers/auth.guards';
import { fakeBackendProvider } from 'app/auth/helpers'; // used to create fake backend
import { JwtInterceptor, ErrorInterceptor } from 'app/auth/helpers';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ContextMenuComponent } from 'app/main/extensions/context-menu/context-menu.component';
import { AnimatedCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/animated-custom-context-menu/animated-custom-context-menu.component';
import { BasicCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/basic-custom-context-menu/basic-custom-context-menu.component';
import { SubMenuCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/sub-menu-custom-context-menu/sub-menu-custom-context-menu.component';
import { ApiModule } from './api/api.module';
import { environment } from 'environments/environment';
import { VndPipeModule } from './common/pipe/vnd.pipe.module';
const appRoutes = [
    {
        path: '',
        loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'apps',
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'manages',
        loadChildren: () => import('./main/manages/manages.module').then(m => m.ManagesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'sales',
        loadChildren: () => import('./main/sales/sales.module').then(m => m.SalesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'setting',
        loadChildren: () => import('./main/setting/setting.module').then(m => m.SettingModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'components',
        loadChildren: () => import('./main/components/components.module').then(m => m.ComponentsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'extensions',
        loadChildren: () => import('./main/extensions/extensions.module').then(m => m.ExtensionsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'forms',
        loadChildren: () => import('./main/forms/forms.module').then(m => m.FormsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'tables',
        loadChildren: () => import('./main/tables/tables.module').then(m => m.TablesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'charts-and-maps',
        loadChildren: () => import('./main/charts-and-maps/charts-and-maps.module').then(m => m.ChartsAndMapsModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
    }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ContextMenuComponent,
            BasicCustomContextMenuComponent,
            AnimatedCustomContextMenuComponent,
            SubMenuCustomContextMenuComponent
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            VndPipeModule,
            HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
                delay: 0,
                passThruUnknownUrl: true
            }),
            RouterModule.forRoot(appRoutes, {
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'legacy'
            }),
            NgbModule,
            ToastrModule.forRoot(),
            TranslateModule.forRoot(),
            ContextMenuModule,
            CoreModule.forRoot(coreConfig),
            CoreCommonModule,
            CoreSidebarModule,
            CoreThemeCustomizerModule,
            CardSnippetModule,
            LayoutModule,
            ContentHeaderModule,
            ApiModule.forRoot({ rootUrl: environment.apiUrl }),
        ],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
            // ! IMPORTANT: Provider used to create fake backend, comment while using real API
            fakeBackendProvider
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map