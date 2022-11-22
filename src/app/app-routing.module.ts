import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';

import { AdminComponent } from './page/admin/admin.component';
import { NewComponent } from './page/new/new.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { TripsComponent } from './page/trips/trips.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'new', component: NewComponent },
  {
    path: 'trip/edit/:id',
    component: DataEditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
