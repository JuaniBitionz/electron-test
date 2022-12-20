import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  news: any[] = [
    {
      title: 'Long Title 1',
      badge: 'Full Kombat',
      img: './assets/img/home/new-example.webp'
    },
    {
      title: 'Long Title 2',
      badge: 'Full Kombat',
      img: './assets/img/home/new-example.webp'
    },
    {
      title: 'Long Title 3',
      badge: 'Full Kombat',
      img: './assets/img/home/new-example.webp'
    },
    {
      title: 'Long Title 4',
      badge: 'Full Kombat',
      img: './assets/img/home/new-example.webp'
    },
  ]

  headerSwiper: SwiperOptions = {
    navigation: true,
    slidesPerView: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
