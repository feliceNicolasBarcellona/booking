import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  { path: 'search', loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule), canActivate:[AuthGuard]},
  { path: 'login',loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule), canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'search' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
