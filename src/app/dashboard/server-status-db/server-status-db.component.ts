import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-server-status-db',
  templateUrl: './server-status-db.component.html',
  styleUrls: ['./server-status-db.component.css']
})
export class ServerStatusDbComponent {

  // chartOption: EChartsOption = {
  //   title: {
  //     text: 'Service Status',
  //     // subtext: 'Fake Data',
  //     left: 'center'
  //   },
  //   yAxis: {
  //     type: 'category',
  //     data: [
  //       'Cognition PT',
  //       'Csurv PT',
  //       'Csurv PD',
  //       'Policy Service',
  //       'Audit Service',
  //       'User Service'
  //     ]
  //   },
  //   xAxis: {
  //     type: 'value'
  //   },
  //   tooltip: {},
  //   series: [
  //     {
  //       data: [
  //         {
  //           value: 2,
  //           name: 'Running',
  //           itemStyle: {
  //             color: '#65B581'
  //           }
  //         },
  //         {
  //           value: 2,
  //           name: 'Running',
  //           itemStyle: {
  //             color: '#FFCE34'
  //           }
  //         },
  //         {
  //           value: 1,
  //           name: 'Failed',
  //           itemStyle: {
  //             color: '#65B581'
  //           }
  //         },
  //         {
  //           value: 2,
  //           name: 'Running',
  //           itemStyle: {
  //             color: '#FFCE34'
  //           }
  //         },
  //         {
  //           value: 2,
  //           name: 'Running',
  //           itemStyle: {
  //             color: '#65B581'
  //           }
  //         },
  //         {
  //           value: 1,
  //           name: 'Failed',
  //           itemStyle: {
  //             color: '#FFCE34'
  //           }
  //         },
  //       ],
  //       type: 'bar'
  //     }
  //   ]
  // };

  chartOption: EChartsOption = {
    // tooltip: {
    //   trigger: 'item'
    // },
    title: {
      text: 'Server Running Status',
      // subtext: 'Fake Data',
      left: 'left'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        // name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 404,
            name: 'Cognition PT',
            itemStyle: {
              color: '#FD665F'
            }
          },
          {
            value: 200,
            name: 'Csurv PT',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 200,
            name: 'Csurv PD',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 200,
            name: 'Policy Service',
            itemStyle: {
              color: '#65B581'
            }
          },
          {
            value: 404,
            name: 'Audit Service',
            itemStyle: {
              color: '#FD665F'
            }
          },
          {
            value: 200,
            name: 'User Service',
            itemStyle: {
              color: '#65B581'
            }
          }
        ]
      }
    ]
  };

}
