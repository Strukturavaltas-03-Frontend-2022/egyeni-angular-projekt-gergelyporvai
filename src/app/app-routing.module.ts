import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FamilyComponent } from './page/family/family.component';
import { HomeComponent } from './page/home/home.component';
import { SoloComponent } from './page/solo/solo.component';
import { AdminComponent } from './page/admin/admin.component';
import { NewComponent } from './page/new/new.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'solo', component: SoloComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'new', component: NewComponent },
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
