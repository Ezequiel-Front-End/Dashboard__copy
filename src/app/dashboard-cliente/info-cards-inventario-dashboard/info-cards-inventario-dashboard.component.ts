import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cards-inventario-dashboard',
  templateUrl: './info-cards-inventario-dashboard.component.html',
  styleUrls: ['./info-cards-inventario-dashboard.component.scss']
})
export class InfoCardsInventarioDashboardComponent implements OnInit{

  garantiaDisponivel: any = 0
  varValue: any = 0
  maximoDraw: any = 0
  beta: any = 0
  historicoDeDados: any = 0
  caixaDisponivel: any = 0
  netExplosure: any = 0
  glowExplosure: any = 0

  constructor() {}
  ngOnInit(): void {
    
  }

}
