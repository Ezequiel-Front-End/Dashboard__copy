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
<<<<<<< HEAD
    this._service.cadastroCliente() 
=======
     this._service.cadastroCliente() 
>>>>>>> 4237cf6420dc8f83861a2815ee7d37284c201cb0
    // this._service.cadastroSetor()
    // this._service.cadastroTicker()

  }

 


}
