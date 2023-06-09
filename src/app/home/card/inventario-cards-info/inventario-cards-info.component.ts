import { Component, Input, OnInit, Output } from '@angular/core';
import { ProcessoRendaVariavel } from 'src/app/interface/processo-renda-variavel';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-inventario-cards-info',
  templateUrl: './inventario-cards-info.component.html',
  styleUrls: ['./inventario-cards-info.component.scss']
})
export class InventarioCardsInfoComponent implements OnInit {

  spinner: boolean = false
  resultado: boolean = true



  totalClient: any;



  totalClientEscritorio: any;
  totalClientTaylorMade: any;
  totalClientNovosMes: any;
  totalHistoricoDados: any = 0;
  totalCaixaDisponivel: any = 0;
  totalPlMesa: any = 0;
  totalPlRvEscritorio: any = 0;


  constructor(private _service: ModelService) { }
  ngOnInit(): void {
    this.totalClientFunction()
  }


  totalClientFunction() {
    this._service.cadastroCliente().then((value: any) => {

      this.totalClient = value.length

      if (this.totalClient == '') {
        this.spinner = true
        this.resultado = false
      }
    })

    this._service.processoRendaVariavel().then((value: any) => {

      value.forEach((dado: any) => {
        let i = new ProcessoRendaVariavel()


        i.data = {financeiroAtual:0}

        for (let j = 0; j < dado.data.template.length; j++) {
        i.data.financeiroAtual += dado.data.template[j].financeiroAtual


        }
      
        this.totalCaixaDisponivel += parseFloat(i.data.financeiroAtual)

      });
      this.totalCaixaDisponivel = this.totalCaixaDisponivel.toFixed(2)
    })
  }

}


// value[0].data.template[0].financeiroAtual