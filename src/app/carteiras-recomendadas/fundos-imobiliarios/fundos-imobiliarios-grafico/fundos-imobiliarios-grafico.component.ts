import { Component, OnInit } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-fundos-imobiliarios-grafico',
  templateUrl: './fundos-imobiliarios-grafico.component.html',
  styleUrls: ['./fundos-imobiliarios-grafico.component.scss']
})
export class FundosImobiliariosGraficoComponent implements OnInit{

  
  
  //pie
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
    labels: ['Ações'],
    datasets: [ {
      data: [ 1000 ],
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
 


//bar => grafico de colunas
public pieChartOptionsBar: ChartConfiguration['options'] = {
  responsive: true,
  scales: {
    x: {
      display: true,
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true, // Começar o eixo a partir do zero
      display: false,
      grid: {
        display: false
      },
      ticks: {
        precision: 0, // Número de casas decimais exibidas
        stepSize: 1000, // Incremento entre os valores
        callback: (value) => {
          return value.toLocaleString('pt-BR'); // Formato de exibição dos valores (ex: 1.000)
        }
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#000',
      },
      display: true,
      position: 'bottom',
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
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        type:  'line',
        label: 'Realizado',
        data: [15000, 20000, 15000, 17000, 20000, 15000, 17000, 15000, 20000, 17000, 14500, 20000],
        borderColor: '#FF8C00',
        pointStyle: false,
        pointBackgroundColor: '#FF8C00',	
        backgroundColor: '#FF8C00',
        fill: false,        
        yAxisID: 'shared-axis'

      } as any,

      {
        type: 'bar',
        label: 'Previsto',
        data: [15000, 20000, 10000, 17000, 20000, 15000, 17000, 15000, 20000, 17000, 15000, 20000],
        backgroundColor: ['#4472C4'],
        yAxisID: 'shared-axis'
      },

    ]
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


  constructor() {}
  ngOnInit(): void {
    
  }

}