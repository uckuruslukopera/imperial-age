import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { UnitsComponent } from './modules/units/pages/units/units.component';
import { UnitDetailsComponent } from './modules/units/pages/unit-details/unit-details.component';
import { APP_BASE_HREF} from '@angular/common';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { UnitsModule } from './modules/units/units.module';
import { PillsComponent } from './modules/units/components/pills/pills.component';
import { CostRangeComponent } from './modules/units/components/cost-range/cost-range.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { TableComponent } from './modules/units/components/table/table.component';

describe('AppComponent', () => {
  const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'units', component: UnitsComponent},
    {path: 'units/:id', component: UnitDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule,
        HomeModule,
        UnitsModule,
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it(`should have as title 'Imperial Age'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Imperial Age');
  });
});

