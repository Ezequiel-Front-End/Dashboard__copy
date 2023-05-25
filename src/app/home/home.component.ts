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
    this._service.tratamento()
  }


}
