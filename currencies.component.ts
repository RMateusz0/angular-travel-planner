import { Component, OnInit } from '@angular/core';
import { TravelCurrencyHttpService } from '../services/travel-currency-http.service'

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  
  fullDataObjectFromAPI: any;
  conversion_rates_ObjectFromAPI: any;
  currenciesNamesStringArray: string[] = []

  currencyNameSelected1: string = 'PLN';
  currencyNameSelected2: string = 'EUR';

  currencyRate1: number = 0;
  currencyRate2: number = 0;
  calculatedRate: number = 1;

  amount: number = 1000;
  resultOfCalc: number = 0;
  resultChosenRate: string = ''
  resultProcessed: boolean = false;

  constructor(private http: TravelCurrencyHttpService) {}
    
  ngOnInit() {
    this.http.getFullRawData().subscribe(data => { 
      this.fullDataObjectFromAPI=data
      this.conversion_rates_ObjectFromAPI = this.fullDataObjectFromAPI.conversion_rates
      for (let element in this.conversion_rates_ObjectFromAPI) {
        this.currenciesNamesStringArray.push(element)
      }
    } )
  }
  
  calculate() {
    
      this.currencyRate1 = this.conversion_rates_ObjectFromAPI[this.currencyNameSelected1]
      this.currencyRate2 = this.conversion_rates_ObjectFromAPI[this.currencyNameSelected2]
      this.calculatedRate = this.currencyRate2/this.currencyRate1
     
      this.resultOfCalc = this.amount * this.calculatedRate
      this.resultChosenRate = this.currencyNameSelected2
      // console.log("zaczynam liczyć: " + this.currencyNameSelected1 + ' -> ' + this.currencyNameSelected2 + ' dla kwoty ' + this.amount + ` dla parametrów ${this.currencyRate1}/${this.currencyRate2}///////${this.calculatedRate}`)
      this.resultProcessed = true
    }
   
}



