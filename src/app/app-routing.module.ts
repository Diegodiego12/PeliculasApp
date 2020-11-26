import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'peliculas',pathMatch: 'full'},
  {path: 'peliculas', loadChildren: () => import('./pages/peliculas/peliculas.module').then( m => m.PeliculasPageModule)},
  {path: 'detalle/:myId', loadChildren: () => import('./pages/peli-detalle/peli-detalle.module').then( m => m.PeliDetallePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
