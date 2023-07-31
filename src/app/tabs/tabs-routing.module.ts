import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutPage } from "./about/about.component";
import { ContactPage } from "./contact/contact.component";
import { HomePage } from "./home/home.component";
import { TabsComponent } from "./tabs.component";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsComponent,
    children: [
      {
        path: "home",
        component: HomePage
      },
      {
        path: "about",
        component: AboutPage
      },
      {
        path: "contact",
        component: ContactPage
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
