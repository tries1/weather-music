import {Component, OnInit, Input} from "@angular/core";
import {WeatherService} from "../weather.service";
import {Events} from "ionic-angular";
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {

  weather: string;
  weatherImage: string;

  constructor(
    private weatherService: WeatherService,
    //private events: Events //use ionic
    ) { }

  ngOnInit() {
    this.getWeather('seoul');

    DashboardComponent.change.subscribe((city) => {
      if(!city){ city = 'seoul'}
      this.getWeather(city);
    });

    /*this.events.subscribe('change-city', ( city ) => {
      if(!city){ city = 'seoul'}
        this.getWeather(city);
    });*/ //use ionic
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).then(weather => {
        this.weather = weather.toString();
        this.setWeatherImage(weather.toString());
    });
  }

  setWeatherImage(weather: string): void {
    switch (weather) {
      case '폭우'  :
        this.weatherImage = 'showerRain';
        break;
      case '이슬비'  :
        this.weatherImage = 'drizzling';
        break;
      case '비'  :
        this.weatherImage = 'rain';
        break;
      case '눈'  :
        this.weatherImage = 'snow';
        break;
      case '안개'  :
        this.weatherImage = 'mist';
        break;
      case '구름'  :
        this.weatherImage = 'cloud';
        break;
      case '맑음'  :
        this.weatherImage = 'clear';
        break;
      default   :
        this.weatherImage = 'clear';
        break;
    }

  }

}
