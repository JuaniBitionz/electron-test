import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

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
    slidesPerView: 1,
    spaceBetween: 0,
    // navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    loop: true
  }

  games: any[] = [
    {
      logo: './assets/img/home/game-logo-example.svg',
      img: './assets/img/home/home-card-example.png',
      name: 'Full Kombat',
      state: 'installed'
    },
    {
      logo: './assets/img/home/game-logo-example.svg',
      img: './assets/img/home/home-card-example.png',
      name: 'Full Kombat',
      state: 'downloading'
    },
    {
      logo: './assets/img/home/game-logo-example.svg',
      img: './assets/img/home/home-card-example.png',
      name: 'Full Kombat',
      state: 'update'
    },
  ]

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void{
    // console.log(this.swiper);
  }

  swiperNext(){
    this.swiper?.swiperRef.slideNext(300);
  }
  swiperBack(){
    this.swiper?.swiperRef.slidePrev(300);
  }
}
