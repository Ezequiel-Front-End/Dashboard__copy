import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})

export class GraficoComponent implements OnInit {

  pieChartData = {
    labels: ['Clientes', 'Empréstimos', 'Devoluções', 'Riscos', 'Atributos'],
    datasets: [
      {
        data: [89, 32, 34, 54, 67, 98],
        label: 'Sales Percen',
        fill: true
      }
    ]
  }

  pieChartOption = {
    responsive: false
  }

  public height: number = 200;
  public width: number = 400;
  public type: ChartType = 'pie'


  constructor(){}
  ngOnInit(): void {
    
  }


  public chartPie(): void{
    
  }
}
