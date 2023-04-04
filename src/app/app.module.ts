import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// NG2 chart
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CarteirasRecomendadasComponent } from './carteiras-recomendadas/carteiras-recomendadas.component';
import { ExitComponent } from './exit/exit.component';
import { HedgeComponent } from './hedge/hedge.component';
import { HomeComponent } from './home/home.component';
import { OperacaoEstruturadasComponent } from './operacao-estruturadas/operacao-estruturadas.component';
import { OperacaoLongShortComponent } from './operacao-long-short/operacao-long-short.component';
import { RelatorioDePerformanceComponent } from './relatorio-de-performance/relatorio-de-performance.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TreinamentoComponent } from './treinamento/treinamento.component';
import { InventarioCardsInfoComponent } from './home/card/inventario-cards-info/inventario-cards-info.component';
import { LinhaComponent } from './home/espaçamento/linha/linha.component';
import { RiscosComponent } from './home/risco/riscos/riscos.component';
import { TabelaComponent } from './home/tabela/tabela/tabela.component';
import { GraficoComponent } from './home/grafico/grafico.component';
import { TabelaOperacaoEstruturadasComponent } from './operacao-long-short/tabela-operacao-estruturadas/tabela-operacao-estruturadas/tabela-operacao-estruturadas.component';
import { TabelaOperacaoLongShortComponent } from './operacao-long-short/tabela-operacao-long-short/tabela-operacao-long-short/tabela-operacao-long-short.component';
import { GraficosValoresRiscosComponent } from './carteiras-recomendadas/grafico-valores-risco/graficos-valores-riscos/graficos-valores-riscos.component';
import { TabelaCarteiraComponent } from './carteiras-recomendadas/tabela-carteira/tabela-carteira/tabela-carteira.component';
import { DashboardComponent } from './dashboard-cliente/dashboard/dashboard.component';
import { MaximoDrawdownComponent } from './carteiras-recomendadas/maximo-drawdown/maximo-drawdown/maximo-drawdown.component';
import { FundosImobiliariosGraficoComponent } from './carteiras-recomendadas/fundos-imobiliarios/fundos-imobiliarios-grafico/fundos-imobiliarios-grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CarteirasRecomendadasComponent,
    ExitComponent,
    HedgeComponent,
    HomeComponent,
    OperacaoEstruturadasComponent,
    OperacaoLongShortComponent,
    RelatorioDePerformanceComponent,
    SidenavComponent,
    TreinamentoComponent,
    InventarioCardsInfoComponent,
    LinhaComponent,
    RiscosComponent,
    TabelaComponent,
    GraficoComponent,
    TabelaOperacaoEstruturadasComponent,
    TabelaOperacaoLongShortComponent,
    GraficosValoresRiscosComponent,
    TabelaCarteiraComponent,
    DashboardComponent,
    MaximoDrawdownComponent,
    FundosImobiliariosGraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
