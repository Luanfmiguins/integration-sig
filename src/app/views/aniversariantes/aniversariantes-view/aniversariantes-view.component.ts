import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Aniversariante } from 'src/app/model/aniversariante.model';
import { AniversarianteService } from 'src/app/services/aniversariante.service';

@Component({
  selector: 'app-aniversariantes-view',
  templateUrl: './aniversariantes-view.component.html',
  styleUrls: ['./aniversariantes-view.component.css']
})
export class AniversariantesViewComponent implements OnInit {

  aniversariante!: Aniversariante;

  constructor(
    private aniversarianteService: AniversarianteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.aniversarianteService.readById(id).subscribe((aniversariante) => {
      this.aniversariante = aniversariante;
    },err => {
      this.aniversarianteService.snackbarError('Error:' + {err})
    });
  }

  visualizar(){
    this.aniversarianteService.snackbarView('Você está apenas visualizando para Editar/Excluir, sai dessa aba!!')
  }
  cancel(): void {
    this.router.navigate(['/aniversariantes']);
  }
}
