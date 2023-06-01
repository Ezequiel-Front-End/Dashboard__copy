import { Component, OnInit } from '@angular/core';
import { ModelService } from '../service/model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _service: ModelService) { }
  ngOnInit(): void {
     this._service.gerarToken()
    // this._service.cadastroAAI()
    // this._service.cadastroCliente() 
    // this._service.cadastroSetor()
    // this._service.cadastroTicker()

    this._service.processoRendaVariavel()
  
  }

}
