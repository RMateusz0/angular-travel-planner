import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TravelCurrencyHttpService {


  constructor(private http: HttpClient) { }

  getFullRawData() {
    return this.http.get('https://v6.exchangerate-api.com/v6/46eb04c940fe6793ba9fcde9/latest/PLN')
  }


}


// 