import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-fundos-imobiliarios-grafico',
  templateUrl: './fundos-imobiliarios-grafico.component.html',
  styleUrls: ['./fundos-imobiliarios-grafico.component.scss']
})
export class FundosImobiliariosGraficoComponent implements OnInit{

  ColumnChartData = {  
    labels: ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho'],
    datasets: [
      {
        data: [89, 32, 34, 54, 67, 98],
        label: 'Sales Percen',
        fill: true
      },
    ]
  }

  ColumnChartOption = {
    responsive: true,
    backgroundColor: '#4472C4'
  }


  
  pieChartData = {  
    labels: ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho'],
    datasets: [
      {
        data: [89, 32, 34, 54, 67, 98],
        label: 'Sales Percen',
        fill: true
      },
    ]
  }

  pieChartOption = {
    responsive: true,
    borderWidth:0
  }
  public height: number = 200;
  public width: number = 400;
  public type: ChartType = 'bar'
  public typePie: ChartType = 'pie'





  constructor() {}
  ngOnInit(): void {
    
  }

}
