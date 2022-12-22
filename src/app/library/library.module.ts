import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './components/library/library.component';
import { SharedModule } from '../shared/shared.module';
import { GameDetailComponent } from './components/game-detail/game-detail.component';


@NgModule({
  declarations: [
    LibraryComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule,
  ]
})
export class LibraryModule { }
