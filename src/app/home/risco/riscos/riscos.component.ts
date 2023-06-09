import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-riscos',
  templateUrl: './riscos.component.html',
  styleUrls: ['./riscos.component.scss']
})
export class RiscosComponent implements OnInit{

  maximoDraw: any = 0
  alavancagem: any = 0
  garantiaDisponivel: any = 0

  constructor(private api: ModelService){}
  ngOnInit(): void {
    this.api.processoRendaVariavel().then((value:any)=>{
      this.maximoDraw = value[0].data.template[0].percentualAtivo
      
    
    })
  }

  


}
