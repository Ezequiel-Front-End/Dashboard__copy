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

  

  a: any;
  b: any;
  c: any;
  d: any;
  e: any;

  constructor(private _service: ModelService) {} 

  ngOnInit(): void {    
    this.atribuirDados()    
}



  atribuirDados(){

      let jasmine =  this._service.cadastroCliente().then((e)=>{
      let primeiroValor = e.length
      let segundoValor = 400
      let terceiroValor = 300
      let quartoValor = 200
      let quintoValor = 100

      
      this.a = this.pieChartData.datasets[0].data[0] = primeiroValor
      this.b = this.pieChartData.datasets[0].data[1] = segundoValor
      this.c = this.pieChartData.datasets[0].data[2] = terceiroValor
      this.d =  this.pieChartData.datasets[0].data[3] = quartoValor
      this.e = this.pieChartData.datasets[0].data[4] = quintoValor

      let array = this.pieChartData.datasets[0].data
  
})    
    return jasmine
    
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
        data: [100, 200, 300, 400, 500],
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
