import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  games: any[] = [
    {
      id: 1,
      logo: './assets/img/home/game-logo-example.svg',
      img: './assets/img/home/home-card-example.png',
      name: 'Full Kombat',
      state: 'installed'
    },
    {
      id: 2,
      logo: './assets/img/home/game-logo-example.svg',
      img: './assets/img/home/home-card-example.png',
      name: 'Full Kombat',
      state: 'downloading'
    },
    {
      id: 3,
      logo: './assets/img/home/game-logo-example.svg',
      img: './assets/img/home/home-card-example.png',
      name: 'Full Kombat',
      state: 'update'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
