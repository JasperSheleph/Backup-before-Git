import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
// export class SearchfilterPipe implements PipeTransform {

//   transform(countries: any, _receivedCountryName: any): any {
    
//     if (_receivedCountryName === undefined) return countries;

//     return countries.filter(function(country){
//       return country.name.toLowerCase().includes(_receivedCountryName.toLowerCase());
//     })
//   }

// }

export class SearchfilterPipe implements PipeTransform {
  transform(countries: any[], _receivedCountryName: string): any[] {
    if(!countries) return [];
    if(!_receivedCountryName) return countries;
    _receivedCountryName = _receivedCountryName.toLowerCase();
return countries.filter( it => {
      return it.toLowerCase().includes(_receivedCountryName);
    });
   }
}
