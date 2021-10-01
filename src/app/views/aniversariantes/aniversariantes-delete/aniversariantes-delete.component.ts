import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Aniversariante } from 'src/app/model/aniversariante.model';
import { AniversarianteService } from 'src/app/services/aniversariante.service';

@Component({
  selector: 'app-aniversariantes-delete',
  templateUrl: './aniversariantes-delete.component.html',
  styleUrls: ['./aniversariantes-delete.component.css']
})
export class AniversariantesDeleteComponent implements OnInit {
  aniversariante!: Aniversariante;

  constructor(
    private aniversarianteService: AniversarianteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')|| '';
    this.aniversarianteService.readById(id).subscribe((aniversariante) => {
      this.aniversariante = aniversariante;
    },err => {
      this.aniversarianteService.snackbarError(err)
    });
  }

  deleteAniversariante(): void {
    this.aniversarianteService.delete(`${this.aniversariante._id}`).subscribe(() => {
      this.aniversarianteService.snackbarSuccess('Aniversariante excluido com sucesso');
      this.router.navigate(['/aniversariantes']);
    },err => {
      this.aniversarianteService.snackbarError(err)
    });
  }
  cancel(): void {
    this.router.navigate(['aniversariantes']);
  }
}
