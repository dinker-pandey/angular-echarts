import { Component, OnInit } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-policy-objects-db',
  templateUrl: './policy-objects-db.component.html',
  styleUrls: ['./policy-objects-db.component.css']
})
export class PolicyObjectsDbComponent {

  labelOption = {
    show: true,
    rotate: 90,
    formatter: '{c}',
    fontSize: 14,
    rich: {
      name: {}
    }
  };

  chartOption: EChartsOption = {
    title: {
      text: 'All Policy Object Counts',
      // subtext: 'Fake Data',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: ['Lex', 'NLF-S', 'NLF-R', 'NLF-T', 'Pol-S', 'Pol-R', 'Pol-T', 'Test Req']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {},
    series: [
      {
        data: [120, 200, 120, 60, 150, 110, 120, 80],
        label: this.labelOption,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }

}
