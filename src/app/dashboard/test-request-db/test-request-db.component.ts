import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-test-request-db',
  templateUrl: './test-request-db.component.html',
  styleUrls: ['./test-request-db.component.css']
})
export class TestRequestDbComponent {

  // labelOption = {
  //   show: true,
  //   rotate: 90,
  //   formatter: '{c}',
  //   fontSize: 16,
  //   rich: {
  //     name: {}
  //   }
  // };

  // chartOption: EChartsOption = {
  //   title: {
  //     text: 'Last 10 Test Request Status',
  //     // subtext: 'Fake Data',
  //     left: 'center'
  //   },
  //   show: true,
  //   verticalAlign: 'middle',
  //   rotate: 90,
  //   toolbox: {
  //     show: true,
  //     orient: 'vertical',
  //     left: 'right',
  //     top: 'center',
  //     feature: {
  //       mark: { show: true },
  //       dataView: { show: true, readOnly: false },
  //       magicType: { show: true, type: ['line', 'bar', 'stack'] },
  //       restore: { show: true },
  //       saveAsImage: { show: true }
  //     }
  //   },
  //   xAxis: {
  //     type: 'category',
  //     data: ['TR-1', 'TR-2', 'TR-3', 'TR-4', 'TR-5', 'TR-6', 'TR-7', 'TR-8', 'TR-9', 'TR-10']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   tooltip: {},
  //   series: [
  //     {

  //       data: [
  //         {
  //           label: this.labelOption,
  //           name: 'test-failed',
  //           value: 2,
  //           itemStyle: {
  //             color: '#a90000'
  //           },
  //           emphasis: {
  //             focus: 'series'
  //           }
  //         },
  //         {
  //           name: 'test-passed',
  //           label: this.labelOption,
  //           value: 4,
  //           itemStyle: {
  //             color: 'green'
  //           }
  //         },
  //         {
  //           name: 'test-failed',
  //           label: this.labelOption,
  //           value: 3,
  //           itemStyle: {
  //             color: 'yellow'
  //           }
  //         },
  //         {
  //           name: 'test-failed',
  //           label: this.labelOption,
  //           value: 5,
  //           itemStyle: {
  //             color: '#a90000'
  //           }
  //         },
  //         {
  //           name: 'test-failed',
  //           label: this.labelOption,
  //           value: 7,
  //           itemStyle: {
  //             color: '#a90000'
  //           }
  //         },
  //         {
  //           name: 'test-failed',
  //           label: this.labelOption,
  //           value: 2,
  //           itemStyle: {
  //             color: '#a90000'
  //           }
  //         },
  //         {
  //           name: 'test-failed',
  //           label: this.labelOption,
  //           value: 2,
  //           itemStyle: {
  //             color: '#a90000'
  //           }
  //         },
  //         {
  //           name: 'test-failed',
  //           label: this.labelOption,
  //           value: 2,
  //           itemStyle: {
  //             color: '#a90000'
  //           }
  //         },
  //         {
  //           name: 'test-failed',
  //           label: this.labelOption,
  //           value: 2,
  //           itemStyle: {
  //             color: '#a90000'
  //           }
  //         },
  //         {
  //           name: 'test-failed',
  //           label: this.labelOption,
  //           value: 2,
  //           itemStyle: {
  //             color: '#a90000'
  //           }
  //         }
  //       ],
  //       type: 'bar',
  //       showBackground: true,
  //       backgroundStyle: {
  //         color: 'rgba(180, 180, 180, 0.2)'
  //       }
  //     }
  //   ]
  // }

  chartOption: EChartsOption = {
    title: {
      text: 'Last 10 Test Request Status',
      // subtext: 'Fake Data',
      left: 'center'
    },
    yAxis: {
      type: 'category',
      data: [
        'TR-1 (Test Failed)',
        'TR-2(Test Running)',
        'TR-3(Test Completed)',
        'TR-4 (Test Running)',
        'TR-5(Test Failed)',
        'TR-6(Test Running)',
        'TR-7 (Test Completed)',
        'TR-8(Test Completed)',
        'TR-9(Test Running)',
        'TR-10(Test Failed)'
      ]
    },
    xAxis: {
      type: 'value'
    },
    tooltip: {},
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        data: [
          {
            value: 5,
            name: 'Test Completed',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 3,
            name: 'Test Running',
            itemStyle: {
              color: '#FFCE34'
            }
          },
          {
            value: 10,
            name: 'Test Completed',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 4,
            name: 'Test Completed',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 2,
            name: 'Test Completed',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 8,
            name: 'Test Completed',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 7,
            name: 'Test Completed',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 6,
            name: 'Test Running',
            itemStyle: {
              color: '#FFCE34'
            }
          },
          {
            value: 5,
            name: 'Test Failed',
            itemStyle: {
              color: '#FD665F'
            }
          },
          {
            value: 3,
            name: 'Test Running',
            itemStyle: {
              color: '#FFCE34'
            }
          },
        ],
        type: 'bar'
      }
    ]
  };

}
