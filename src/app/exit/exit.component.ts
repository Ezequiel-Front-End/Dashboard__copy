import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModelService } from '../service/model.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent  implements OnInit{

  Invoiceheader: any;
  term: string = '' 

  Options: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>()

  constructor(private _service: ModelService){}
  ngOnInit(): void {
    this.Options = {
      language:{
        processing: "Procesando...",
        search: "Buscar Informações:",
        lengthMenu: "Mostrar _MENU_ resultados",
        info: "Mostrando desde _START_ á _END_ de _TOTAL_ registros",
        infoEmpty: "Mostrando nenhum registro.",
        infoFiltered: "(filtrado _MAX_ elementos no total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "Dados não encontrados",
        emptyTable: "Carregando...",
        paginate: {
          first: "Primeiro",
          previous: "Anterior",
          next: "Seguinte",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        },


      
      },
      pageLength: 3,
      pagingType: 'full_numbers',
      searching:  true,
      paging: true,
      lengthChange: true,
      lengthMenu: [3, 5, 10]
    }


  }



 
  }



// searchPlaceholder: 'Buscar',
