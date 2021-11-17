import { CanActivate, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/guard.service';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', canActivate:[AuthGuardService], data: { animation: 'HomePage' } },
  {path: 'characters', component: CharactersComponent, canActivate:[AuthGuardService], data: { animation: 'CharactersPage' } },
  {path: 'character/:id', component: CharacterComponent, canActivate:[AuthGuardService], data: { animation: 'DetailPage' }  },
  {path: 'starships', component: StarshipsComponent, canActivate:[AuthGuardService], data: { animation: 'StarshipsPage' } },
  {path: 'starship/:id', component: StarshipComponent, canActivate:[AuthGuardService], data: { animation: 'DetailPage' }  },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
