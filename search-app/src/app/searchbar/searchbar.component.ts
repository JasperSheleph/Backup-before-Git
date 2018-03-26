import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Results } from '../results'
import { from } from 'rxjs/observable/from';
import { GaugeComponent } from '../gauge/gauge.component';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit {

  public results : Results[] = [];
  public countryName : string;
  public stateName : string = "California";
  public cityName : string = "Los Angeles";

  //public _resAQIUS : number ;
 
  constructor(private searchService : SearchService) { }

  public getCitySpecificDetails () {

    this.searchService.getCitySpecificDetails(this.countryName, this.stateName, this.cityName)
    .subscribe((res) => {
      for (let key in res) {
        this.results.push(res[key]);
      } 
      console.log(this.results[1].current.pollution.aqius);
      console.log(this.results[1].state);
     // _resAQIUS  = this.results[1].current.pollution.aqius;
    },
    (error) => console.log("Error : " + error));                                                             
  }
  
  ngOnInit() {
  }

}
