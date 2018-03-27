import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchService } from './search.service';
import { NgxGaugeModule } from 'ngx-gauge';
import { GaugeComponent } from './gauge/gauge.component';

 import { VectormapComponent } from './vectormap/vectormap.component';
import { DxVectorMapModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    GaugeComponent,
    VectormapComponent
  ],
  imports: [
    BrowserModule,
    DxVectorMapModule,
    HttpClientModule,
    FormsModule,
    NgxGaugeModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
