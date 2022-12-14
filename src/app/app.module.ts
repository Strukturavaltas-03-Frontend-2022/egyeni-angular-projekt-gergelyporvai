import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';

import { AdminComponent } from './page/admin/admin.component';
import { CardComponent } from './common/card/card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { CategoryFilterPipe } from './pipe/category-filter.pipe';
import { NewComponent } from './page/new/new.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { TripsComponent } from './page/trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,

    AdminComponent,
    CardComponent,
    FilterPipe,
    CategoryFilterPipe,
    NewComponent,
    DataEditorComponent,
    TripsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
