import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyComponent } from './components/legal/policy/policy.component';
import { TermsComponent } from './components/legal/terms/terms.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: 'policy', redirectTo: '/policy', pathMatch: 'full' },
  { path: 'policy', component: PolicyComponent },
  { path: 'terms', redirectTo: '/terms', pathMatch: 'full' },
  { path: 'terms', component: TermsComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
