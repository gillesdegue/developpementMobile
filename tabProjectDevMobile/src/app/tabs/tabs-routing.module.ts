import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'plat',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plat/plat.module').then(m => m.PlatPageModule)
          },
          {
            path: 'ajouter',
            loadChildren: () =>
              import('../plat/ajouter/ajouter.module').then(m => m.AjouterPageModule)
          },
          {
            path: 'modifier/:id',
            loadChildren: () =>
              import('../plat/modifier/modifier.module').then(m => m.ModifierPageModule)
          },
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then(m => m.MenuPageModule)
          },
          {
            path: 'afficher',
            loadChildren: () =>
              import('../menu/afficher/afficher.module').then(m => m.AfficherPageModule)
          },
          {
            path: 'ajouter',
            loadChildren: () =>
              import('../menu/ajouter/ajouter.module').then(m => m.AjouterPageModule)
          },
          {
            path: 'modifier/:id',
            loadChildren: () =>
              import('../menu/modifier/modifier.module').then(m => m.ModifierPageModule)
          },
        ]
      },
      {
        path: 'compte',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../compte/compte.module').then(m => m.ComptePageModule)
          }
        ]
      },
      {
        path: 'commande',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../commande/commande.module').then(m => m.CommandePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/plat',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/plat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
