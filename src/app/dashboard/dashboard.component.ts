import {Component, OnInit} from "@angular/core";
import { Events } from 'ionic-angular';
import { Subject }    from 'rxjs/Subject';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  static change = new Subject<string>();


  constructor(
    //private events: Events //use ionic
    ) { }

  ngOnInit() {
    //this.getWeather();
    //this.getMusics();

    //this.onChangeCity('seoul');
  }


  onChangeCity(city: string): void {
    //this.events.publish('change-city', city ); //use ionic
    DashboardComponent.change.next(city);

    /*this.weatherService.getWeather(city).then(weather => {
      this.weather = weather.toString();
      this.setWeatherImage(weather.toString());
    });*/

    //this.musicService.getMusics(city).then(musics => this.musics = musics);
  }


}
