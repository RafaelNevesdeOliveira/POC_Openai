import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PocFormComponent } from './pages/poc-form/poc-form.component';
import { PocServiceComponent } from './pages/poc-service/poc-service.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'poc-form',
    component: PocFormComponent
  },
  {
    path: 'poc-service',
    component: PocServiceComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
