import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ramais } from 'src/app/model/ramais.model';
import { RamaisService } from 'src/app/services/ramais.service';

@Component({
  selector: 'app-ramais-table',
  templateUrl: './ramais-table.component.html',
  styleUrls: ['./ramais-table.component.css']
})
export class RamaisTableComponent implements OnInit {

  mask!: string;

  ramais!: Ramais[];

  

  displayedColumns = ['nome', 'setor', 'ramal', 'açôes'];

  constructor(private router: Router, private ramaisService: RamaisService) {

  }
  ngOnInit(): void {
    this.ramaisService.read().subscribe(ramais => {
      this.ramais = ramais
    }, err => {
      this.ramaisService.snackbarError(err)
    });
  }
  navigateToClienteCreate(): void {
    this.router.navigate(['ramais/add'])
  }
}