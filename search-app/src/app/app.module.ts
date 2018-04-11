import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';
import { DxVectorMapModule } from 'devextreme-angular';
import { SidebarModule } from 'ng-sidebar';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule,MatButtonModule } from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { VectormapComponent } from './vectormap/vectormap.component';
import { GaugeComponent } from './gauge/gauge.component';
import { SearchService } from './search.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchfilterPipe } from './searchfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    VectormapComponent,
    SearchbarComponent,
    GaugeComponent,
    SidenavComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    A11yModule,
    DxVectorMapModule,
    HttpClientModule,
    FormsModule,
    NgxGaugeModule,
    SidebarModule.forRoot(),
    PerfectScrollbarModule
  ],
  providers: [SearchService,
    {provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: PERFECT_SCROLLBAR_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
