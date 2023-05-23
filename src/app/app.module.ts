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
import { MaximoDrawdownComponent } from './carteiras-recomendadas/maximo-drawdown/maximo-drawdown/maximo-drawdown.component';
import { FundosImobiliariosGraficoComponent } from './carteiras-recomendadas/fundos-imobiliarios/fundos-imobiliarios-grafico/fundos-imobiliarios-grafico.component';
import { ProximosVencimentosComponent } from './carteiras-recomendadas/proximos-vencimentos/proximos-vencimentos.component';
import { DashboardComponent } from './dashboard-cliente/dashboard/dashboard.component';
import { InfoCardsInventarioDashboardComponent } from './dashboard-cliente/info-cards-inventario-dashboard/info-cards-inventario-dashboard.component';
import { CampDeBuscaComponent } from './campo-de-busca/camp-de-busca/camp-de-busca.component';
import { HistoricoDeCarteiraIbovComponent } from './dashboard-cliente/historico-de-carteira-ibov/historico-de-carteira-ibov.component';
import { ComposicaoDeCarteiraComponent } from './dashboard-cliente/composicao-de-carteira/composicao-de-carteira.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input'
import { MatPaginatorIntlPtBr } from './service/paginator-ptbr-i8n';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




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
    MaximoDrawdownComponent,
    FundosImobiliariosGraficoComponent,
    ProximosVencimentosComponent,
    DashboardComponent,
    InfoCardsInventarioDashboardComponent,
    CampDeBuscaComponent,
    HistoricoDeCarteiraIbovComponent,
    ComposicaoDeCarteiraComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtBr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
