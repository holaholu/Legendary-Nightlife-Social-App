import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilService {

  constructor(private http: Http) { }

 getAllBars(city) {
    return this.http.get('/api/bars?city='+city)
      .map(res => res.json());
  }

   getUser() {
    return this.http.get('/getuser')
      .map(res => res.json());
  }

}
