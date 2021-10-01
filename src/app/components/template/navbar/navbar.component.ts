import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  data = new Date
  user = 'Administrador'
  
  constructor() {}

  ngOnInit(): void{

  }

}
