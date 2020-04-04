import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ajouter',
    loadChildren: () => import('./menu/ajouter/ajouter.module').then( m => m.AjouterPageModule)
  },
  {
    path: 'modifier',
    loadChildren: () => import('./menu/modifier/modifier.module').then( m => m.ModifierPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./authentification/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./authentification/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'afficher',
    loadChildren: () => import('./menu/afficher/afficher.module').then( m => m.AfficherPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'new-password/:id',
    loadChildren: () => import('./new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
