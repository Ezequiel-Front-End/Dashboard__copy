import { Component, OnInit } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graficos-valores-riscos',
  templateUrl: './graficos-valores-riscos.component.html',
  styleUrls: ['./graficos-valores-riscos.component.scss']
})
export class GraficosValoresRiscosComponent implements OnInit {



  constructor() { }
  ngOnInit(): void {

  }



  //bar
  //bar => grafico de colunas
  public pieChartOptionsBar: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: true
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
        display: false,
        position: 'top',
      },
      datalabels: {
        display: false,
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };



  public pieChartDataBar: ChartData<'bar', number[], string | string[]> = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [{
      data: [100, 200, 300, 400, 500, 600, 700],
      backgroundColor: ['#4472C4']
    },]
  }



  public pieChartTypeBar: ChartType = 'bar';
  public pieChartPluginsBar = [DatalabelsPlugin];

  // events
  public chartView({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartViewed({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
