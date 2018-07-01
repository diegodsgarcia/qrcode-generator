import { Injectable } from '@angular/core';

@Injectable()
export class GamesProvider {

  games = [{
      name: 'Zelda Breath of the Wild',
      platform: ['Nintendo Switch']
    },
    {
      name: 'Fortnite',
      platform: ['Nintendo Switch', 'PC', 'Xbox One']
    }
  ];

  constructor() {}

  insert(game) {
    this.games.push(game);
  }

  update(game, index) {
    this.games[index] = game;
  }

}
