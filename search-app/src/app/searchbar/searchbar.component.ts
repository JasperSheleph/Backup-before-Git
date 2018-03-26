import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Results } from '../results'
import { from } from 'rxjs/observable/from';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit {

  public countryName : string;
  public results : Results[] = [];
  public tt: string= "Jas";
  constructor(private searchService : SearchService) { }

  public getCountryDetails (){
    this.searchService.getDetails(this.countryName).subscribe((res) => {
      for (let key in res){
        this.results.push(res[key]);
      } 
      // console.log(res);
      console.log(this.results[1].location.coordinates[1]);
    },
    (error) => console.log("error : " + error));                                                             
  }
  
  ngOnInit() {
  }

}
