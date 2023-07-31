import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule,
  Routes,
} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {
  TuiRootModule,
  TuiSvgService,
  TuiDialogModule,
  TuiNotificationsModule,
  TuiModeModule,
} from '@taiga-ui/core';
import { TUI_SANITIZER } from '@taiga-ui/cdk';

import * as icons from '@taiga-ui/icons';

import { AppComponent } from './app.component';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import { of } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    // Modules for main app.module that should be add once
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiModeModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // A workaround because StackBlitz does not support assets
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [TuiSvgService],
      useFactory: iconsWorkaround,
    },
    /**
     * If you use unsafe icons or have kind of WYSISYG editor in your app
     *
     * Take a look at: https://github.com/TinkoffCreditSystems/ng-dompurify
     *
     * This library implements DOMPurify as Angular Sanitizer or Pipe.
     * It delegates sanitizing to DOMPurify and supports the same configuration.
     */
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
  ],
})
export class AppModule {}

// A workaround because StackBlitz does not support assets
export function iconsWorkaround(service: TuiSvgService): Function {
  return () => service.define({ ...icons, tuiCoreIcons: '', tuiKitIcons: '' });
}
