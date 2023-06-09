import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-historico-de-carteira-ibov',
  templateUrl: './historico-de-carteira-ibov.component.html',
  styleUrls: ['./historico-de-carteira-ibov.component.scss']
})
export class HistoricoDeCarteiraIbovComponent implements OnInit{

  constructor() {}
  ngOnInit(): void {
    
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.   
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
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        display: false, 
      }
    },   
  };
  public barChartType: ChartType = 'line';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'line'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'CLI', borderColor: '#BC0D15', backgroundColor: "#BC0D15", borderWidth: 2, pointStyle: false, pointBackgroundColor: "#BC0D15"},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'IQL Ações Ativo',  borderColor: '#56037D', backgroundColor: "#56037D",  borderWidth: 2, pointStyle: false, pointBackgroundColor: "#56037D"},
      { data: [ 14, 59, 70, 10, 46, 55, 35 ], label: 'Ibovespa', borderColor: '#000000', backgroundColor: "#000000",  borderWidth: 2, pointStyle: false, pointBackgroundColor: "#000000"},
    ],
      
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
      40 ];

    this.chart?.update();
  }

  



}

  




