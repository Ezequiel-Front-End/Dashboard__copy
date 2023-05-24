import { Component, OnInit, ViewChild} from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Colors } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-composicao-de-carteira',
  templateUrl: './composicao-de-carteira.component.html',
  styleUrls: ['./composicao-de-carteira.component.scss']
})
export class ComposicaoDeCarteiraComponent implements OnInit{

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  //pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['R$: 1.000.00'],
    datasets: [ {
      data: [ 300 ],
      backgroundColor: '#008A16',
      borderWidth: 0
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }



  
  //bar
  public pieChartOptionsBar: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
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
      backgroundColor: '#4472C4',
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





  construcutor() {}
  ngOnInit(): void {
   
  }


  
  
}






