import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCurrency'
})
export class SearchCurrencyPipe implements PipeTransform {

  transform(currencyPackage:Array<string>, searchTerm:string): any {
    return currencyPackage.filter((x)=>x.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
