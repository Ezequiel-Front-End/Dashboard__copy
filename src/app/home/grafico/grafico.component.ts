import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})

export class GraficoComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        color: 'white',
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Clientes', 'Empréstimos', 'Devoluções', 'Riscos', 'Atributos'],
    datasets: [
      {
        backgroundColor: [
          '#AC58FA', '#2E64FE', '#00CED1', '#FFBF00', '#819FF7'
        ],
        borderColor: [
          '#AC58FA', '#2E64FE', '#00CED1', '#FFBF00', '#819FF7'
        ],
        data: [35, 45, 54, 45, 98],
        label: 'Resultado',


      }
    ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


  constructor() { }
  ngOnInit(): void {

  }

}
