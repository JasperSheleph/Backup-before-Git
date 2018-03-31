import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { DxVectorMapModule } from 'devextreme-angular';
import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import vector_map from 'devextreme/viz/vector_map';


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
      elements.forEach(
          (element) => { 
           element.attribute("population", this.populations[element.attribute("name")]);
          }
    );
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

  click(e) {
    let target = e.target;
    // console.log(target.attribute("name"));

    if(target && this.populations[target.attribute("name")]) {
        
            var vm = e.component;
            var coordinates = vm.convertCoordinates(e.event.x,e.event.y);
            vm.center(coordinates).zoomFactor(3);
            target.selected(!target.selected());
        
        target.selected(!target.selected());
    }
    else{
        console.log("Please Click Highlighted Area You Fool !");
    }
}


  ngOnInit() {
    // this.searchService.getCountriesList().subscribe(
    //     res => { 
    //          for (let i=0;i<res.data.length; i++)
    //          console.log(typeof(res.data));
    //     });
  }

}
