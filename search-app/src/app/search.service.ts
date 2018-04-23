import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Results } from './results';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';



let populations: Object = {
  "Afghanistan":1.00,
  "Andorra":1.00,
  "Argentina":1.00,
  "Australia":1.00,
  "Austria":1.00,
  "Bahrain":1.00,
  "Bangladesh":1.00,
  "Belgium":1.00,
  "Bosnia Herzegovina":1.00,
  "Brazil":1.00,
  "Bulgaria":1.00,
  "Cambodia":1.00,
  "Canada":1.00,
  "Chile":1.00,
  "China":1.00,
  "Colombia":1.00,
  "Croatia":1.00,
  "Cyprus":1.00,
  "Czech Republic":1.00,
  "Denmark":1.00,
  "Estonia":1.00,
  "Ethiopia":1.00,
  "Finland":1.00,
  "France":1.00,
  "Germany":1.00,
  "Hong Kong":1.00,
  "Hungary":1.00,
  "India":1.00,
  "Indonesia":1.00,
  "Iran":1.00,
  "Ireland":1.00,
  "Israel":1.00,
  "Italy":1.00,
  "Japan":1.00,
  "Kosovo":1.00,
  "Kuwait":1.00,
  "Latvia":1.00,
  "Lithuania":1.00,
  "Macedonia":1.00,
  "Malaysia":1.00,
  "Malta":1.00,
  "Mexico":1.00,
  "Mongolia":1.00,
  "Morocco":1.00,
  "Nepal":1.00,
  "Netherlands":1.00,
  "New Zealand":1.00,
  "Nigeria":1.00,
  "Norway":1.00,
  "Pakistan":1.00,
  "Peru":1.00,
  "Philippines":1.00,
  "Poland":1.00,
  "Portugal":1.00,
  "Puerto Rico":1.00,
  "Russia":1.00,
  "Saudi Arabia":1.00,
  "Serbia":1.00,
  "Singapore":1.00,
  "Slovakia":1.00,
  "Slovenia":1.00,
  "South Korea":1.00,
  "Spain":1.00,
  "Sri Lanka":1.00,
  "Sweden":1.00,
  "Switzerland":1.00,
  "Taiwan":1.00,
  "Thailand":1.00,
  "Turkey":1.00,
  "USA":1.00,
  "Uganda":1.00,
  "Ukraine":1.00,
  "United Arab Emirates":1.00,
  "United Kingdom":1.00,
  "Vietnam":1.00,
  };


@Injectable()

export class SearchService {

  constructor(private http : HttpClient) { }

    getCitySpecificDetails(countryName : string, stateName : string, cityName : string): Observable<Results[]>{
      // let API_URL : string = 'http://api.airvisual.com/v2/states?country='+countryName+'&key=jBmLrxgf7EpYJwjvT';
      // let API_URL : string = 'http://api.airvisual.com/v2/city?city='+cityName+'&state='+stateName+'&country='+countryName+'&key=jBmLrxgf7EpYJwjvT';
    //  return this.http.get<Results[]>(API_URL);
      return this.http.get<Results[]>('./assets/responsedata.json');    
    }

    getCountriesList(): Observable<Results>{
      return this.http.get<Results>('./assets/countrieslist.json');
    }

    getStatesList(countryName : string): Observable<Results>{
      return this.http.get<Results>('./assets/statelist.json');
    }

    getPopulations(): Object {
      return populations;     
  }


}