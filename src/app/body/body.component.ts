import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{


  @Input() collapsed  = false;
  @Input() screenWidth = 0;

  constructor () {}
  ngOnInit(): void {
  
  }

  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body__trimmed';
    }
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body__md__screen';
    }
    return styleClass;
  }

}
