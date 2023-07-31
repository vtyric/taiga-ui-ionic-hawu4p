import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { AboutPage } from './about/about.component';
import { ContactPage } from './contact/contact.component';
import { HomePage } from './home/home.component';

import {
  TuiButtonModule,
  TuiLinkModule,
  TuiHintControllerModule,
  TuiDataListModule,
  TuiTextfieldControllerModule,
  TuiGroupModule,
  TuiHintModule,
} from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiDataListWrapperModule,
  TuiInputDateTimeModule,
  TuiIslandModule,
  TuiMultiSelectModule,
  TuiTabsModule,
} from '@taiga-ui/kit';
import {
  TuiAxesModule,
  TuiBarChartModule,
  TuiLineChartModule,
  TuiRingChartModule,
} from '@taiga-ui/addon-charts';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageRoutingModule,
    TuiAvatarModule,
    TuiHintModule,
    TuiDataListWrapperModule,
    TuiInputDateTimeModule,
    TuiIslandModule,
    TuiMultiSelectModule,
    TuiTabsModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiMultiSelectModule,
    TuiInputDateTimeModule,
    TuiTabsModule,
    TuiAxesModule,
    TuiLineChartModule,
    TuiBarChartModule,
    TuiRingChartModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiGroupModule,
    TuiMoneyModule,
    PolymorpheusModule,
  ],
  declarations: [TabsComponent, AboutPage, ContactPage, HomePage],
})
export class TabsPageModule {}
