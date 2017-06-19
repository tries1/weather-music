import { Component, OnInit } from '@angular/core';
import {MusicService} from "../music.service";
import {Music} from "../music";
import {Events} from "ionic-angular";
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  musics: Music[] = [];

  constructor(
    private musicService: MusicService
    //private events: Events //use ionic
  ) { }

  ngOnInit() {
    this.getMusics('seoul');

    DashboardComponent.change.subscribe((city) => {
      if(!city){ city = 'seoul'}
      this.getMusics(city);
    });

    /*this.events.subscribe('change-city', ( city ) => {
      if(!city){ city = 'seoul'}
        this.getMusics(city);
    });*/ // use ionic
  }

  getMusics(city: string): void {
    this.musicService.getMusics(city).then(musics => this.musics = musics);
  }
}
