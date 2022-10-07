import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarEncodeComponent } from './charts/bar-encode/bar-encode.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    BarEncodeComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts")
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
