import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsComponent } from './pages/units/units.component';
import { UnitDetailsComponent } from './pages/unit-details/unit-details.component';

const routes: Routes = [
  {
    path: 'units', component: UnitsComponent
  },
  {
    path: 'units/:id', component: UnitDetailsComponent
  },
  {
    path: '', redirectTo: 'units', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule { }
