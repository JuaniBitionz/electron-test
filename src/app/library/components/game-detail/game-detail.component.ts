import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameDetailComponent implements OnInit {

  game: any = {
    id: 1,
    logo: './assets/img/home/game-logo-example.svg',
    img: './assets/img/home/game-detail-frontpage.png',
    name: 'Full Kombat',
    state: 'installed',
    description: 'Full Kombat se desarrolla en un mundo distópico y futurista, con escenarios variados y un sistema de combate centrado en generar acción desenfrenada desde el primer momento. Todos los modos de juego giran en torno a mantener la adrenalina que destaca en los shooters de primer nivel, con las novedades y niveles de personalización que permite la Blockchain, además de la posibilidad para los jugadores de obtener recompensas reales por victoria, puesto que podrán jugar partidas competitivas por dinero real.',
    author: 'BTZ Games',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
