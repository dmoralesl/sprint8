import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'starship/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
