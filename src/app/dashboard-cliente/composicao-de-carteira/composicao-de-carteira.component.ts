import { Component, OnInit, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ModelService } from 'src/app/service/model.service';


@Component({
  selector: 'app-composicao-de-carteira',
  templateUrl: './composicao-de-carteira.component.html',
  styleUrls: ['./composicao-de-carteira.component.scss']
})
export class ComposicaoDeCarteiraComponent implements OnInit {

  valorPie: any;


  constructor(private _service: ModelService) {
    this.pieChartData.datasets[0].data[0] = 100
 
  }
  
  ngOnInit(): void {
    this._service.processoRendaVariavel().then((value: any) => {

      this.valorPie = value.length
      console.log(value);



    })
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  //pie => grafico de pizza
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
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


  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Ação'],
    datasets: [{
      data: [1000],
      backgroundColor: '#008A16',
      borderWidth: 0
    }]
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




  //bar => grafico de colunas
  public pieChartOptionsBar: ChartConfiguration['options'] = {
    responsive: true,
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






