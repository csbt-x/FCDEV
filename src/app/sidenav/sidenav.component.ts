import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  showSubmenu: boolean = false;
  showSubmenu1: boolean = false;
  showSubmenu2: boolean = false;
  isShowing = false;
  isShowing1 = false;
  isShowing2 = false;
  showSubSubMenu: boolean = false;


  mouseenter() {

  }

  mouseleave() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
