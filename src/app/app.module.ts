import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { FamilyComponent } from './page/family/family.component';
import { SoloComponent } from './page/solo/solo.component';
import { AdminComponent } from './page/admin/admin.component';
import { CardComponent } from './common/card/card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { CategoryFilterPipe } from './pipe/category-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FamilyComponent,
    SoloComponent,
    AdminComponent,
    CardComponent,
    FilterPipe,
    CategoryFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
