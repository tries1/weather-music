import {Injectable} from '@angular/core';

import {Music} from './music';
import { Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:8080/api/weather/current';

  constructor(private http: Http){ }

  getWeather(city: string): Promise<Music> {
    if(!city){ city = 'seoul'; }

    const url = `${this.apiUrl}/${city}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response['_body'])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
