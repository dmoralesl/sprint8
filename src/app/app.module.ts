import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CustomInterceptor } from './interceptors';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { PilotComponent } from './components/pilot/pilot.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    DetailComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PilotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
