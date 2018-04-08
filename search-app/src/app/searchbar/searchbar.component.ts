import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SearchService } from '../search.service';
import { Results } from '../results';
import { from } from 'rxjs/observable/from';



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

  public resAQIUS : number ;

  @Output() _countryName: EventEmitter<string> = new EventEmitter<string>();
 
  constructor(private searchService : SearchService) { }

  public getCitySpecificDetails () {

    this.searchService.getCitySpecificDetails(this.countryName, this.stateName, this.cityName)
    .subscribe((res) => {
      for (let key in res) {
        this.results.push(res[key]);
      } 
      console.log(this.results[1].current.pollution.aqius);
      console.log(this.results[1].state);
     this.resAQIUS  = this.results[1].current.pollution.aqius;
    },
    (error) => console.log("Error : " + error));                                                             
  } 

  public onTyped(){
    this._countryName.emit(this.countryName);
    //  console.log(this.countryName);
  }
  
  ngOnInit() {
  }

}
