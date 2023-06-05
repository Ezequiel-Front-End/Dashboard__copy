import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CadastroCliente } from 'src/app/interface/cadastro-cliente';
import { Dados } from 'src/app/model/dados';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-proximos-vencimentos',
  templateUrl: './proximos-vencimentos.component.html',
  styleUrls: ['./proximos-vencimentos.component.scss']
})
export class ProximosVencimentosComponent implements OnInit {


  API: any
  

  displayedColumns = ['Nome Completo', 'E-mail', 'Telefone']
  dataSource!: MatTableDataSource<any>; 

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private api: ModelService) {}
  ngOnInit(): void {
    this.api.cadastroCliente().then((value)=>{
      this.API = value
      this.dataSource = new MatTableDataSource(this.API);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;

      this.dataSource.filterPredicate = function(data: CadastroCliente, filter: string){
        return data.data?.nomeCompleto.toLocaleLowerCase().indexOf(filter) != -1
      }
  })
}


  filterData(value: Event){
    const filterValue = (value.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
}

}

