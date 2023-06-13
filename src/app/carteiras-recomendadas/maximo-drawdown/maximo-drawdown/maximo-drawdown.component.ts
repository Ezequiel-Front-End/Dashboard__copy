import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-maximo-drawdown',
  templateUrl: './maximo-drawdown.component.html',
  styleUrls: ['./maximo-drawdown.component.scss']
})
export class MaximoDrawdownComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        display: true,
        grid: {
          display: false
        },

      },
      y: {
        beginAtZero: true, // Começar o eixo a partir do zero
        display: false,
        grid: {
          display: false
        },
        ticks: {
          precision: 2, // Número de casas decimais exibidas
          callback: (value: string | number) => {
            const numericValue = typeof value === 'string' ? parseFloat(value) : value * 100;
            return numericValue + '%'; // Adiciona o símbolo de porcentagem ao valor
          }
        }

      },
      yPercent: {
        beginAtZero: true,
        display: true,
        grid: {
          display: true
        },
        ticks: {
          callback: (value: string | number) => {
            const numericValue = typeof value === 'string' ? parseFloat(value) : value;
            return numericValue + '%'; // Adiciona o símbolo de porcentagem ao valor
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      datalabels: {
        display: false,
        anchor: 'end',
        align: 'end',
        formatter: (value: number) => {
          return value.toString() + '%';
        }
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar', number[], string | string[]> = {
    labels: ['1997', '1999', '2001', '2003', '2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019'],
    datasets: [
      {
        type: 'line',
        label: 'Limite',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#000000',
        pointStyle: false,
        borderWidth: 2,
        pointBackgroundColor: '#000000',
        backgroundColor: '#000000',
        fill: false,
        yAxisID: 'yPercent'
      } as any,

      {
        type: 'bar',
        label: 'Total',
        data: [-90, -75, -50, 0, -25, 50, 75, 100, -75, -50, 0, -25],
        backgroundColor: ['#4472C4'],
        yAxisID: 'yPercent'
      },

    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();
  }

}
