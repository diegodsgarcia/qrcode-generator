import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  name: string = "";
  plataform: object[]  = [];
  qrCode: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createCode() {
    const qrData = { name: this.name, ...this.plataform };
    this.qrCode = JSON.stringify(qrData);
  }

  updatePlatform(checked, name) {
    if(checked) {
      this.plataform.push(name)
    } else {
      this.plataform.splice(this.plataform.indexOf(name), 1)
    }
  }
}

