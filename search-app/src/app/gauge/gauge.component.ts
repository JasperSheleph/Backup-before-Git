import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  @Input() resAQIUS;

  constructor(private searchService : SearchService) { }

  gaugeType = "full";
  gaugeValue = 47.4;
  gaugeLabel = "Index";
  gaugeAppendText = "";

  public displayGaugeComp () {

    console.log(this.resAQIUS);
    
  }

  ngOnInit() {

  }

}
