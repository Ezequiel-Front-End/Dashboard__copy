import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteirasRecomendadasComponent } from './carteiras-recomendadas/carteiras-recomendadas.component';
import { ExitComponent } from './exit/exit.component';
import { HedgeComponent } from './hedge/hedge.component';
import { HomeComponent } from './home/home.component';
import { OperacaoEstruturadasComponent } from './operacao-estruturadas/operacao-estruturadas.component';
import { OperacaoLongShortComponent } from './operacao-long-short/operacao-long-short.component';
import { RelatorioDePerformanceComponent } from './relatorio-de-performance/relatorio-de-performance.component';
import { TreinamentoComponent } from './treinamento/treinamento.component';
import { DashboardComponent } from './dashboard-cliente/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Carteiras Recomendadas', component: CarteirasRecomendadasComponent},
  {path: 'Operações Long & Short', component: OperacaoLongShortComponent},
  {path: 'Operações Estruturadas', component: OperacaoEstruturadasComponent},
  {path: 'Hedge', component: HedgeComponent},
  {path: 'Relatório de Performance', component: RelatorioDePerformanceComponent},
  {path: 'Treinamento', component: TreinamentoComponent},
  {path: 'Exit', component: ExitComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }