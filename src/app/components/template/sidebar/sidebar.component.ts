import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}



export const ROUTES: RouteInfo[] = [
  { path: '/noticias', title: 'Noticias',  icon: 'article', class: '' },
  { path: '/aniversariantes', title: 'Aniversariantes',  icon: 'cake', class: '' },
  { path: '/ramais', title: 'Ramais',  icon: 'phone', class: '' },
  
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  menuItems!: any[];
  
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

  

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }


}
