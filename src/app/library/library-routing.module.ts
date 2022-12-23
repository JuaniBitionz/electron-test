import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  {
    path: ':gameId',
    component: GameDetailComponent
  },
  {
    path: '',
    component: LibraryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
