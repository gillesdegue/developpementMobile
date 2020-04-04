import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficherPage } from './afficher.page';

const routes: Routes = [
  {
    path: '',
    component: AfficherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficherPageRoutingModule {}
