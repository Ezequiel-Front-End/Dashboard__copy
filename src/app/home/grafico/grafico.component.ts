import { Component, OnInit, ViewChild } from '@angular/core';
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

  // valores dos graficos 
  totalCliente: number = 100;
  totalEmprestimo: number = 90;
  totalDevolucoes: number = 10;
  totalRiscos: number = 40;
  totalAtributos: number = 20;

  constructor(private _service: ModelService) { }
  ngOnInit(): void {
    this._service.cadastroCliente().then((value)=>{
    let a = value
     this.totalCliente = a.length
    })
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
        data: [this.totalCliente, this.totalEmprestimo, this.totalDevolucoes, this.totalRiscos, this.totalAtributos],
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
