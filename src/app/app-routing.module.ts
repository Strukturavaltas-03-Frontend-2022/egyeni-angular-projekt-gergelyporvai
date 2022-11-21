import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { FamilyComponent } from './page/family/family.component';
import { HomeComponent } from './page/home/home.component';
import { SoloComponent } from './page/solo/solo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'solo', component: SoloComponent },
  { path: 'admin', component: AdminComponent },
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
