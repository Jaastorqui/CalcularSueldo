import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Resultado } from './resultado';


@Injectable()
export class MongoService {

  constructor(private http: Http) { }

  private headers = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});


  getMongo (sueldo:number): Observable<Resultado[]> {

      let params = new URLSearchParams();
      params.set('sueldo', sueldo.toString());


    return this.http.post("http://localhost:3000/average" , params)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);

  }

}
