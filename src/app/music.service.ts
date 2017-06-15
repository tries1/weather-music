import {Injectable} from '@angular/core';

import {Music} from './music';
import { Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MusicService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:8080/api/music/weather';

  constructor(private http: Http){ }

  getMusic(city: string): Promise<Music> {
    //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    if(!city){ city = 'seoul'; }

    const url = `${this.apiUrl}/${city}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Music)
      .catch(this.handleError);
  }

  getMusics(city: string): Promise<Music[]> {
    const url = `${this.apiUrl}/${city}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Music[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
