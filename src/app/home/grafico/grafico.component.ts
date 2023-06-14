import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ModelService } from 'src/app/service/model.service';
import { ProcessoRendaVariavel } from 'src/app/interface/processo-renda-variavel';
import { CadastroTicker } from 'src/app/interface/cadastro-ticker';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})

export class GraficoComponent implements OnInit {

  dados: any;

  constructor(private _service: ModelService) {
    this.pieChartData.datasets[0].data[0] = 100
    this.pieChartData.datasets[0].data[1] = 200
    this.pieChartData.datasets[0].data[2] = 300
    this.pieChartData.datasets[0].data[3] = 400
    this.pieChartData.datasets[0].data[4] = 500
  }


  async ngOnInit(): Promise<void> {
    let arrayTickers: CadastroTicker[] = []

    let clientes = await this._service.cadastroCliente();

    arrayTickers = await this._service.cadastroTicker();

    let valor = await this._service.processoRendaVariavel();

    let customLabels: string[] = await this.gerarLabels(valor, arrayTickers); 

     customLabels = customLabels.filter(item => item !== undefined);

    this.dados = clientes.length
    this.pieChartData.labels = customLabels;




    let datasetData = await this.gerarPizza(valor, arrayTickers);


    for (let index = 0; index < datasetData.length; index++) {

      this.pieChartData.datasets[0].data[index] = datasetData[index]
    }


    this.chart?.update();


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




  public async gerarPizza(valor: ProcessoRendaVariavel[], tickers: any) {
    let kakaka: any[] = [];
    let repeticoes: any = [];
    let contador: any = {};
    let setorCout: any[] = [];
    for (let i = 0; i < valor.length; i++) {

      let cliente: any[] = [];
      for (let j = 0; j < valor[i].data.template.length; j++) {

        let found = tickers.find((element: CadastroTicker) => element.data?.ticker == valor[i].data.template[j].ticker.label)
        let setor = found?.data.setor.label
        cliente.push(setor);

      }
      setorCout.push(cliente);
    }
    let setores = setorCout[0];
    for (let index = 0; index < setores.length; index++) {
      let item = setores[index];
      console.log(item);

      if (item != undefined) {
        contador[item] = (contador[item] || 0) + 1;
      }

    }

    for (let item in contador) {
      repeticoes.push(contador[item]);
    }

    return repeticoes;

    // console.log(setores);



  }


  public async gerarLabels(valor: ProcessoRendaVariavel[], tickers: any) {

    let setorCout: any[] = [];
    for (let i = 0; i < valor.length; i++) {

      let cliente: any[] = [];
      for (let j = 0; j < valor[i].data.template.length; j++) {

        let found = tickers.find((element: CadastroTicker) => element.data?.ticker == valor[i].data.template[j].ticker.label)
        let setor = found?.data.setor.label
        cliente.push(setor);

      }
      setorCout.push(cliente);
    }
    let setores = setorCout[0];
    let uniqueChars = setores.filter((element: any, index: any) => {
      return setores.indexOf(element) === index;
    });
    return uniqueChars;
  }






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
