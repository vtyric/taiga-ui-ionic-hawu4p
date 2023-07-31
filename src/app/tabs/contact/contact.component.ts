import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.component.html",
  styleUrls: ["contact.style.scss"]
})
export class ContactPage {
  constructor(readonly navCtrl: NavController) {}
}
