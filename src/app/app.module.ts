import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }   from '@angular/http';
import { Events } from "ionic-angular";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MusicService } from './music.service'
import { WeatherService } from './weather.service';
import { MusicComponent } from './music/music.component';
import { WeatherComponent } from './weather/weather.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MusicComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    MusicService,
    WeatherService
    //Events
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
