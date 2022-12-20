import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  btzLogo: string = './assets/img/logos/btz-games-logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
