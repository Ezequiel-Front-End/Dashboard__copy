import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ModelService } from 'src/app/service/model.service';



@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})

export class GraficoComponent implements OnInit {

<<<<<<< HEAD
  constructor(private _service: ModelService){
    this.pieChartData.datasets[0].data[0] = 100
    this.pieChartData.datasets[0].data[1] = 200
    this.pieChartData.datasets[0].data[2] = 300
    this.pieChartData.datasets[0].data[3] = 400
    this.pieChartData.datasets[0].data[4] = 500   
}
=======
  dados: number = 0


  constructor(private _service: ModelService){}
>>>>>>> 6091be2a5cad97ebb9c7fb7f2461bf5c0d00ffae


  ngOnInit(): void {

      this._service.processoRendaVariavel().then((valor)=>{

      this.dados = valor.length


      this.pieChartData.datasets[0].data[0] = this.dados

      this.pieChartData.datasets[0].data[1] = 800
      this.pieChartData.datasets[0].data[2] = 900
      this.pieChartData.datasets[0].data[3] = 700
      this.pieChartData.datasets[0].data[4] = 600

      this.chart?.update();

    })

    console.log(this.dados)
      

  }

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

        data: [],


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

}
