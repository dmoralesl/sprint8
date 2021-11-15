import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {path: 'starships', component: StarshipsComponent, pathMatch: 'full'},
  {path: 'starship/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
