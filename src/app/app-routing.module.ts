import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { UnitsModule } from './modules/units/units.module';
import { PageNotFoundComponent } from './modules/home/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'units',
    loadChildren: './modules/units/units.module#UnitsModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    UnitsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
