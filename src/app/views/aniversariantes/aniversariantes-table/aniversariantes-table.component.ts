import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aniversariante } from 'src/app/model/aniversariante.model';
import { AniversarianteService } from 'src/app/services/aniversariante.service';

@Component({
  selector: 'app-aniversariantes-table',
  templateUrl: './aniversariantes-table.component.html',
  styleUrls: ['./aniversariantes-table.component.css']
})
export class AniversariantesTableComponent implements OnInit {

  mask!: string;

  aniversariante!: Aniversariante[];

  displayedColumns = [ 'foto', 'nome', 'data', 'açôes'];

  constructor(private router: Router, private aniversarianteService: AniversarianteService) {

  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.aniversarianteService.read().subscribe(aniversariante => {
      this.aniversariante = aniversariante
    },err => {
      this.aniversarianteService.snackbarError(err)
    });
  }
  navigateToAniversarianteCreate(): void {
    this.router.navigate(['aniversariantes/add'])
  }
}