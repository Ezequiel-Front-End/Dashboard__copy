import { Component, Input, OnInit, Output } from '@angular/core';
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
  totalHistoricoDados: any;
  totalCaixaDisponivel: any;
  totalPlMesa: any;
  totalPlRvEscritorio: any;


  constructor(private _service: ModelService) {}
  ngOnInit(): void {
   this.totalClientFunction()
}


totalClientFunction(){
  this._service.cadastroCliente().then((value: any)=> {

      this.totalClient = value.length

      if(this.totalClient == '' ){
        this.spinner = true
        this.resultado = false
      }
  })
}

}
