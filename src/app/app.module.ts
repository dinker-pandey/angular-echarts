import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarEncodeComponent } from './charts/bar-encode/bar-encode.component';
import { ServerStatusDbComponent } from './dashboard/server-status-db/server-status-db.component';
import { PolicyObjectsDbComponent } from './dashboard/policy-objects-db/policy-objects-db.component';
import { LexDbComponent } from './dashboard/lex-db/lex-db.component';
import { TestRequestDbComponent } from './dashboard/test-request-db/test-request-db.component';
import { ErrorLogsDbComponent } from './dashboard/error-logs-db/error-logs-db.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    BarEncodeComponent,
    ServerStatusDbComponent,
    PolicyObjectsDbComponent,
    LexDbComponent,
    TestRequestDbComponent,
    ErrorLogsDbComponent
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
