import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Noticias } from 'src/app/model/noticias.model';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias-delete',
  templateUrl: './noticias-delete.component.html',
  styleUrls: ['./noticias-delete.component.css']
})
export class NoticiasDeleteComponent implements OnInit {

  noticias!: Noticias;

  constructor(
    private noticiasService: NoticiasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')|| '';
    this.noticiasService.readById(id).subscribe((noticias) => {
      this.noticias = noticias;
    },err => {
      this.noticiasService.snackbarError(err)
    });
  }

  deleteNoticias(): void {
    this.noticiasService.delete(`${this.noticias._id}`).subscribe(() => {
      this.noticiasService.snackbarSuccess('noticias excluido com sucesso');
      this.router.navigate(['/noticias']);
    },err => {
      this.noticiasService.snackbarError(err)
    });
  }
  cancel(): void {
    this.router.navigate(['noticias']);
  }
}
