import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aniversariante } from 'src/app/model/aniversariante.model';
import { AniversarianteService } from 'src/app/services/aniversariante.service';

@Component({
  selector: 'app-aniversariantes-add',
  templateUrl: './aniversariantes-add.component.html',
  styleUrls: ['./aniversariantes-add.component.css']
})
export class AniversariantesAddComponent implements OnInit {

  aniversariante: Aniversariante = {
    nome:'',
    data:'',
    foto:'',

  }

  constructor(private aniversarianteService: AniversarianteService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createAniversariante(): void {
    this.aniversarianteService.create(this.aniversariante).subscribe(() =>{
      this.aniversarianteService.snackbarSuccess('Operação Executada com sucesso')
      this.router.navigate(['/aniversariantes'])
    },err => {
      this.aniversarianteService.snackbarError(err)
    });
  }
  cancel(): void {
    this.router.navigate(['/aniversariantes'])
  }
}