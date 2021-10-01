import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias } from 'src/app/model/noticias.model';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias-table',
  templateUrl: './noticias-table.component.html',
  styleUrls: ['./noticias-table.component.css']
})
export class NoticiasTableComponent implements OnInit {

  mask!: string;

  noticias!: Noticias[];

  displayedColumns = ['status', 'titulo', 'data', 'açôes'];

  constructor(private router: Router, private noticiasService: NoticiasService) {

  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.noticiasService.read().subscribe(noticias => {
      this.noticias = noticias
    },err => {
      this.noticiasService.snackbarError(err)
    });
  }
  navigateToNoticiasCreate(): void {
    this.router.navigate(['noticias/add'])
  }
}