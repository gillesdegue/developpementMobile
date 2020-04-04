import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfficherPageRoutingModule } from './afficher-routing.module';

import { AfficherPage } from './afficher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficherPageRoutingModule
  ],
  declarations: [AfficherPage]
})
export class AfficherPageModule {}
