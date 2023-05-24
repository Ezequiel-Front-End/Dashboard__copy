import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Dados } from 'src/app/model/dados';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-proximos-vencimentos',
  templateUrl: './proximos-vencimentos.component.html',
  styleUrls: ['./proximos-vencimentos.component.scss']
})
export class ProximosVencimentosComponent implements OnInit {


  

  displayedColumns = ['name', 'username', 'email']
  dataSource!: MatTableDataSource<any>; 

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private api: ModelService) {}
  ngOnInit(): void {
    this.api.getUsers().subscribe((resp: any)=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;
  })
}


  filterData(pesquisar: any){
    this.dataSource.filter = pesquisar.target.value
}

}
