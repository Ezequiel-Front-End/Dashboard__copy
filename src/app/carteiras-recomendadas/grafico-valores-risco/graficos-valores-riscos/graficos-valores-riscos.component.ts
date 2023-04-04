import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graficos-valores-riscos',
  templateUrl: './graficos-valores-riscos.component.html',
  styleUrls: ['./graficos-valores-riscos.component.scss']
})
export class GraficosValoresRiscosComponent implements OnInit{


 
  pieChartData = {  
    labels: ['12%', '19%', '33%', '90%', '16%'],
    datasets: [
      {
        data: [89, 32, 34, 54, 67, 98],
        label: 'Sales Percen',
        fill: true
      }
    ]

  }

  pieChartOption = {
    responsive: true
  }

  public height: number = 200;
  public width: number = 400;
  public type: ChartType = 'bar'


  constructor() {}
  ngOnInit(): void {
  
  }

}
