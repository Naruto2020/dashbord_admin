import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HC_exporting from 'highcharts/modules/exporting';
import exporting from 'highcharts/modules/exporting.src';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

    @Input() data:any = [];

  Highcharts= Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
  
  
      
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Random Data'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      exporting:{
        enabled:true
      },
      credits:{
        enabled:false
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data : this.data
      }]
    }
    
    // HC_exporting(Highcharts);
    exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 200);
  }

}
