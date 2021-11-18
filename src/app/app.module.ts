import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseDetailComponent } from './components/base-detail/base-detail.component';
import { BaseListComponent } from './components/base-list/base-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FilmComponent } from './components/film/film.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { PilotComponent } from './components/pilot/pilot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipsComponent } from './components/starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    StarshipComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PilotComponent,
    FilmComponent,
    BaseListComponent,
    CharactersComponent,
    BaseDetailComponent,
    CharacterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
