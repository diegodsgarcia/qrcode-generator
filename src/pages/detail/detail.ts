import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  name: string = "";
  plataform: object = {};
  qrCode: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createCode() {
    const qrData = { name: this.name, ...this.plataform };
    this.qrCode = JSON.stringify(qrData);
  }
}

