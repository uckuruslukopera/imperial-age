import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsComponent } from './pages/units/units.component';
import { PillsComponent } from './components/pills/pills.component';
import { TableComponent } from './components/table/table.component';
import { CostRangeComponent } from './components/cost-range/cost-range.component';
import { UnitDetailsComponent } from './pages/unit-details/unit-details.component';

@NgModule({
  declarations: [UnitsComponent, PillsComponent, TableComponent, CostRangeComponent, UnitDetailsComponent],
  imports: [
    CommonModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
