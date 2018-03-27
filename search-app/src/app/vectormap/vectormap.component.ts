import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';


@Component({
  selector: 'app-vectormap',
  templateUrl: './vectormap.component.html',
  styleUrls: ['./vectormap.component.css']
})
export class VectormapComponent implements OnInit {

  worldMap: any = mapsData.world;
  populations: Object;

  constructor(private searchService : SearchService) {
      this.populations = searchService.getPopulations();
      this.customizeLayers = this.customizeLayers.bind(this);
  }

  customizeTooltip(arg) {
      if (arg.attribute("population")) {
          return {
              text: arg.attribute("name") + ": " + arg.attribute("population") + "% of world population"
          };
      }
  }

  customizeLayers(elements) {
      elements.forEach((element) => {
          element.attribute("population", this.populations[element.attribute("name")]);
      });
  }

  customizeText(arg) {
      let text;
      if(arg.index === 0) {
          text = '< 0.5%';
      } else if(arg.index === 5) {
          text = '> 3%';
      } else {
          text = arg.start + '% to ' + arg.end + '%';
      }
      return text;
  }

  ngOnInit() {
  }

}
