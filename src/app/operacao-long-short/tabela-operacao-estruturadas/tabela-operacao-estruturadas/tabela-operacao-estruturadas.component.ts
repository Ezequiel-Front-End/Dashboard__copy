import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-tabela-operacao-estruturadas',
  templateUrl: './tabela-operacao-estruturadas.component.html',
  styleUrls: ['./tabela-operacao-estruturadas.component.scss']
})
export class TabelaOperacaoEstruturadasComponent implements OnInit{


  displayedColumns = ['Nome Completo', 'E-mail', 'Telefone']
  dataSource!: MatTableDataSource<any>; 


  
  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  
  constructor(private api: ModelService) {}
  ngOnInit(): void {
    this.api.cadastroCliente().then((resp)=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;
      
    })
  }


  filterData(pesquisa: any){
    this.dataSource.filter = pesquisa.target.value;
  }

}
