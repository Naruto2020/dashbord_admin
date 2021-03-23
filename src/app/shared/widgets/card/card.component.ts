import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HC_exporting from 'highcharts/modules/exporting';
import exporting from 'highcharts/modules/exporting.src';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  label!: String;
  @Input()
  total!: String;
  @Input()
  percentage!: String;

  @Input() data:any = [];

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
  
  
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth:0,
          margin:[2,2,2,2],
          height:60,
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend:{
        enabled:false
      },
      exporting : {
        enabled: false
      },
      xAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []

      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      credits:{
        enabled: false
      },
      series: [
        {
          data: this.data    
        }
        
      ]
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
