import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HC_exporting from 'highcharts/modules/exporting';
import exporting from 'highcharts/modules/exporting.src';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
 
  chartOptions = {};
  Highcharts = Highcharts;
  @Input() data: any = [];

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
  
  
      chart: {
          type: 'area'
      },
      title: {
          text: 'Random Data'
      },
      subtitle: {
          text: 'Test'
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      exporting : {
        enabled: true
      },
      credits:{
        enabled: false
      },
      series: this.data
    };
    
    // HC_exporting(Highcharts);
    exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 200);

  }


}
