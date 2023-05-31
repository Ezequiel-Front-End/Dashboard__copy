import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-inventario-cards-info',
  templateUrl: './inventario-cards-info.component.html',
  styleUrls: ['./inventario-cards-info.component.scss']
})
export class InventarioCardsInfoComponent implements OnInit {

  totalClient: number = 0;

  constructor(private _service: ModelService) {}
  ngOnInit(): void {
    
    this._service.cadastroCliente().then((value)=>{
      let a = value
      this.totalClient = a.length
}) 
}
  
}
