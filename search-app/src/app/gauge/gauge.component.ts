import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {


  @Input() resAQIUS: number;

  constructor(private searchService : SearchService) { }

  gaugeType = "arch";
  gaugeValue = this.resAQIUS;
  gaugeLabel = "Index";
  gaugeAppendText = "";

  thresholdConfig = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '75.5': {color: 'red'}
};

  ngOnInit() {

  }

}
