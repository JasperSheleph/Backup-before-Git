import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Results } from './results';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()

export class SearchService {

  constructor(private http : HttpClient) { }


    public getDetails(countryName : string): Observable<Results[]>{
      // let API_URL : string = 'https://jsonplaceholder.typicode.com/posts';
      // let API_URL : string = 'http://api.airvisual.com/v2/states?country='+countryName+'&key=jBmLrxgf7EpYJwjvT';
      let API_URL : string = 'http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=jBmLrxgf7EpYJwjvT';
     // return this.http.get<Results[]>(API_URL);
      return this.http.get<Results[]>(API_URL);
      

    }

}