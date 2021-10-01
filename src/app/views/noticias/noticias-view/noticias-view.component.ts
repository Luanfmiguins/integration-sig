import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Noticias } from 'src/app/model/noticias.model';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias-view',
  templateUrl: './noticias-view.component.html',
  styleUrls: ['./noticias-view.component.css']
})
export class NoticiasViewComponent implements OnInit {

  noticias!: Noticias;

  constructor(
    private noticiasService: NoticiasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.noticiasService.readById(id).subscribe((noticias) => {
      this.noticias = noticias;
    },err => {
      this.noticiasService.snackbarError(err)
    });
  }

  visualizar(){
    this.noticiasService.snackbarView('Você está apenas visualizando para Editar/Excluir, sai dessa aba!!')
  }
  cancel(): void {
    this.router.navigate(['/noticias']);
  }
}
