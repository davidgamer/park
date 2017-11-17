import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class ParkingService {
  parking: any;
  isDev: boolean;
  constructor(private http: Http) {
    this.isDev = true;
   }


  saveParking (parking) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('parkings/new');
    return this.http.post(ep, parking, {headers: headers})
      .map(res => res.json());
  }

  prepEndpoint(ep) {
    if (this.isDev) {
      return 'http://localhost:3000/' + ep;
    } else {
      console.log(ep);
      return ep;
    }
  }

}
