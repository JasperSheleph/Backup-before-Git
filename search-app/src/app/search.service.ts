import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Results } from './results';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

let populations: Object = {
  "China": 19,
  "India": 17.4,
  "United States": 4.44,
  "Indonesia": 3.45,
  "Brazil": 2.83,
  "Pakistan": 2.62,
  "Nigeria": 2.42,
  "Bangladesh": 2.18,
  "Russia": 2.04,
  "Japan": 1.77,
  "Mexico": 1.67,
  "Philippines": 1.39,
  "Vietnam": 1.25,
  "Ethiopia": 1.23,
  "Egypt": 1.21,
  "Germany": 1.13,
  "Iran": 1.08,
  "Turkey": 1.07,
  "Congo (Kinshasa)": 0.94,
  "France": 0.92,
  "Thailand": 0.9,
  "United Kingdom": 0.89,
  "Italy": 0.85,
  "Burma": 0.84,
  "South Africa": 0.74,
  "S. Korea": 0.7,
  "Colombia": 0.66,
  "Spain": 0.65,
  "Tanzania": 0.63,
  "Kenya": 0.62,
  "Ukraine": 0.6,
  "Argentina": 0.59,
  "Algeria": 0.54,
  "Poland": 0.54,
  "Sudan": 0.52,
  "Canada": 0.49,
  "Uganda": 0.49,
  "Iraq": 0.47,
  "Morocco": 0.46,
  "Uzbekistan": 0.43,
  "Sri Lanka" : 0.20
};

@Injectable()

export class SearchService {

  constructor(private http : HttpClient) { }

    public getCitySpecificDetails(countryName : string, stateName : string, cityName : string): Observable<Results[]>{
      // let API_URL : string = 'http://api.airvisual.com/v2/states?country='+countryName+'&key=jBmLrxgf7EpYJwjvT';
      // let API_URL : string = 'http://api.airvisual.com/v2/city?city='+cityName+'&state='+stateName+'&country='+countryName+'&key=jBmLrxgf7EpYJwjvT';
    //  return this.http.get<Results[]>(API_URL);
      return this.http.get<Results[]>('./assets/responsedata.json');    
    }

    getPopulations(): Object {
      return populations;
  }

}