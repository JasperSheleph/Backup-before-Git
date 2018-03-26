import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  @Input() resAQIUS : number;

  constructor() { }

  gaugeType = "full";
  gaugeValue = 47.4;
  gaugeLabel = "Index";
  gaugeAppendText = "";

  ngOnInit() {

    console.log(this.resAQIUS);
  }

}
