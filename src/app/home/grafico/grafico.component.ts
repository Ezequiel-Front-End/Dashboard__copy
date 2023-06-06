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

  dados: any;

  constructor(private _service: ModelService){
    this.pieChartData.datasets[0].data[0] = 100
    this.pieChartData.datasets[0].data[1] = 200
    this.pieChartData.datasets[0].data[2] = 300
    this.pieChartData.datasets[0].data[3] = 400
    this.pieChartData.datasets[0].data[4] = 500   
}


  ngOnInit(): void {

      this._service.cadastroCliente().then((valor: any)=>{

      this.dados = valor.length
      


      this.pieChartData.datasets[0].data[0] = this.dados

      this.pieChartData.datasets[0].data[1] = 200
      this.pieChartData.datasets[0].data[2] = 300
      this.pieChartData.datasets[0].data[3] = 400
      this.pieChartData.datasets[0].data[4] = 500

      this.chart?.update();

    })

}

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
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
