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
        display: false,
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
    labels: [],
    datasets: [
      {
        backgroundColor: [
          '#AC58FA', '#2E64FE', '#00CED1', '#FFBF00', '#819FF7', '#708090', '#CD5C5C', '#00FA9A', '#00BFFF', '#32CD32'
        ],
        borderColor: [
          '#AC58FA', '#2E64FE', '#00CED1', '#FFBF00', '#819FF7', '#708090', '#CD5C5C', '#00FA9A', '#00BFFF', '#32CD32'
        ],

        data: [],


        label: 'Resultado',
      }
    ]
  };




  public async gerarPizza(valor: ProcessoRendaVariavel[], tickers: any) {
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









// import { Component, ViewChild } from '@angular/core';
// import DatalabelsPlugin from 'chartjs-plugin-datalabels';
// import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';

// @Component({
//   selector: 'app-pie-chart',
//   templateUrl: './pie-chart.component.html',
//   styleUrls: [ './pie-chart.component.scss' ]
// })
// export class PieChartComponent {
//   @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

//   // Pie
//   public pieChartOptions: ChartConfiguration['options'] = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       datalabels: {
//         formatter: (value, ctx) => {
//           if (ctx.chart.data.labels) {
//             return ctx.chart.data.labels[ctx.dataIndex];
//           }
//         },
//       },
//     }
//   };
//   public pieChartData: ChartData<'pie', number[], string | string[]> = {
//     labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
//     datasets: [ {
//       data: [ 300, 500, 100 ]
//     } ]
//   };
//   public pieChartType: ChartType = 'pie';
//   public pieChartPlugins = [ DatalabelsPlugin ];

//   // events
//   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
//     console.log(event, active);
//   }

//   public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
//     console.log(event, active);
//   }

//   changeLabels(): void {
//     const words = [ 'hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
//       'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
//       'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
//       'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
//       'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny' ];
//     const randomWord = () => words[Math.trunc(Math.random() * words.length)];
//     this.pieChartData.labels = new Array(3).map(_ => randomWord());

//     this.chart?.update();
//   }

//   addSlice(): void {
//     if (this.pieChartData.labels) {
//       this.pieChartData.labels.push([ 'Line 1', 'Line 2', 'Line 3' ]);
//     }

//     this.pieChartData.datasets[0].data.push(400);

//     this.chart?.update();
//   }

//   removeSlice(): void {
//     if (this.pieChartData.labels) {
//       this.pieChartData.labels.pop();
//     }

//     this.pieChartData.datasets[0].data.pop();

//     this.chart?.update();
//   }

//   changeLegendPosition(): void {
//     if (this.pieChartOptions?.plugins?.legend) {
//       this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
//     }

//     this.chart?.render();
//   }

//   toggleLegend(): void {
//     if (this.pieChartOptions?.plugins?.legend) {
//       this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
//     }

//     this.chart?.render();
//   }
// }