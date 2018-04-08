import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(countries: any, newCountryName: any): any {
    
    if (newCountryName === undefined) return countries;

    return countries.filter(function(country){
      return country.name.toLowerCase().includes(newCountryName.toLowerCase());
    })
  }

}
