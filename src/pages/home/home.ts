import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  games: object[] = [{
    name: 'Zelda  Breath of the Wild',
    platform: ['Nintendo Switch']
  },
  {
    name: 'Fortnite',
    platform: ['PC', 'Xbox One', 'Nintendo Switch', 'Smartphones']
  }]

  constructor(public navCtrl: NavController) {

  }

  convertObjectToString(obj) {
    return JSON.stringify(obj)
  }

  convertPlataformToString(plataform) {
    return plataform.join(' - ')
  }

  openDetail(game) {
    this.navCtrl.push(DetailPage, { game })
  }
}
