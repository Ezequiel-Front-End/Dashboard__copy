import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  constructor () {}
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()

  collapsed = true;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse() : void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav() : void { 
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }

}


