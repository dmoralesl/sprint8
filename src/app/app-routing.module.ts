import { CanActivate, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/guard.service';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', canActivate:[AuthGuardService] },
  {path: 'starships', component: StarshipsComponent, canActivate:[AuthGuardService] },
  {path: 'starship/:id', component: DetailComponent, canActivate:[AuthGuardService]  },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
