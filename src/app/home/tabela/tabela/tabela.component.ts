import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/service/model.service';


//material design
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent implements OnInit {



<<<<<<< HEAD
  displayedColumns = ['id', 'name', 'data de registro']
=======
  displayedColumns = ['id', 'codigoCorretora', 'nomeCompleto']
>>>>>>> f69f17bf704d2ece1db1dd5d900d395c743885bb
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;


  constructor(private _service: ModelService) { }

  ngOnInit(): void {

    this._service.cadastroAAI().then((resp: any) => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;

    })

  }

  filterData(evento: any) {
    const filtro = (evento.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
    this.dataSource.filter = evento.target.value
  }



  dataOptions = [

    {
      // modulo excel
      extend: "excelHtml5",
      // icone
      text: `<i class="fa-solid fa-file-csv"></i>`,
      // passar o mouse por cima e mostrar o placeholder
      titleAttr: "Exportar para Excel",
      // cor do botao
      className: "btn btn-success"

    },

    {
      // modulo PDF
      extend: "pdfHtml5",
      // icone
      text: `<i class="fa-solid fa-file-pdf"></i>`,
      // passar o mouse por cima e mostrar o placeholder
      titleAttr: "Exportar para PDF",
      // cor do botao
      className: "btn btn-danger"

    },

    {
      // modulo print
      extend: "print",
      // icone
      text: `<i class="fa-solid fa-print"></i>`,
      // passar o mouse por cima e mostrar o placeholder
      titleAttr: "Imprimir",
      // cor do botao
      className: "btn btn-info"

    }


  ]

<<<<<<< HEAD


=======
>>>>>>> f69f17bf704d2ece1db1dd5d900d395c743885bb
}