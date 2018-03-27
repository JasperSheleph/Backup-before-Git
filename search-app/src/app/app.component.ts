import { Component,OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'Search Your Place !';
  private static googleLoaded:any;

  constructor(){
      console.log("Here is GoogleChartComponent")
  }

  getGoogle() {
      return google;
  }
  ngOnInit() {
    console.log('ngOnInit');
    if(!AppComponent.googleLoaded) {
      AppComponent.googleLoaded = true;
      google.charts.load('current',  {packages: ['corechart', 'bar']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  drawGraph(){
      console.log("DrawGraph base class!!!! ");
  }

  createBarChart(element:any):any {
      return new google.visualization.BarChart(element);
  }

  createDataTable(array:any[]):any {
      return google.visualization.arrayToDataTable(array);
  }
}