import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-lex-db',
  templateUrl: './lex-db.component.html',
  styleUrls: ['./lex-db.component.css']
})
export class LexDbComponent {

  chartOption: EChartsOption = {
    title: {
      text: 'Lexicon Compilation Status',
      subtext: '',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 15, name: 'Running' },
          { value: 45, name: 'Completed' },
          {
            value: 13,
            name: 'Failed',
            itemStyle: {
              color: '#FD665F'
            }
          }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

}
