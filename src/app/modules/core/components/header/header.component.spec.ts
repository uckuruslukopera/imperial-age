import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { UnitsComponent } from 'src/app/modules/units/pages/units/units.component';
import { UnitDetailsComponent } from 'src/app/modules/units/pages/unit-details/unit-details.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'units', component: UnitsComponent},
    {path: 'units/:id', component: UnitDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render three links'), () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').length).toEqual(3);
  }


  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Home Page');
  // });
});
