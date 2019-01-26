import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UnitEffects } from './store/effects/unit.effects';
import { FilterEffects } from './store/effects/filter.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UnitEffects, FilterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
