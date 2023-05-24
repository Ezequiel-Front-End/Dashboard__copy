import { Component, OnInit } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graficos-valores-riscos',
  templateUrl: './graficos-valores-riscos.component.html',
  styleUrls: ['./graficos-valores-riscos.component.scss']
})
export class GraficosValoresRiscosComponent implements OnInit{



  constructor() {}
  ngOnInit(): void {
  
  }



  //bar
  public pieChartOptionsBar: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      datalabels: {
        color: '#fff',
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartDataBar: ChartData<'pie', number[], string | string[]> = {
    labels: ['Ezequiel', 'jasmine', 'Fron-end', 'Back-end', 'Full-stack'],
    datasets: [ {
      data: [ 100, 200, 300, 400, 500 ],
      backgroundColor: '#4472C4'
    } ]
  };
  public pieChartTypeBar: ChartType = 'bar';
  public pieChartPluginsBar = [ DatalabelsPlugin ];

  // events
  public chartView({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartViewed({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
