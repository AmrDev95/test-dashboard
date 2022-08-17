import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private _HttpClient:HttpClient
  ) { }

  getCoinsList():Observable<any>{
    return this._HttpClient.post('http://139.162.235.225:5000/api/tickerlist', {});
  }

  getGroups():Observable<any>{
    return this._HttpClient.post('http://139.162.235.225:5000/api/grouplistbyuserid', {});
  }

  getPrice(currency:string):Observable<any>{
    return this._HttpClient.get(`https://api.binance.com/api/v3/ticker/price?symbol=${currency}`);
  }
}
