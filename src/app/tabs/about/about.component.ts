import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "page-about",
  templateUrl: "about.component.html",
  styleUrls: ["about.style.scss"]
})
export class AboutPage {
  constructor(readonly navCtrl: NavController) {}
}
