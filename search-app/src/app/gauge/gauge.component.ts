import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  constructor() { }

  gaugeType = "full";
  gaugeValue = 75.3;
  gaugeLabel = "Index";
  gaugeAppendText = "";

  ngOnInit() {
  }

}
