import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ramais } from 'src/app/model/ramais.model';
import { RamaisService } from 'src/app/services/ramais.service';

@Component({
  selector: 'app-ramais-view',
  templateUrl: './ramais-view.component.html',
  styleUrls: ['./ramais-view.component.css']
})
export class RamaisViewComponent implements OnInit {

  ramais!: Ramais;

  constructor(
    private ramaisService: RamaisService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.ramaisService.readById(id).subscribe((ramais) => {
      this.ramais = ramais;
    },err => {
      this.ramaisService.snackbarError(err)
    });
  }
  visualizar(){
    this.ramaisService.snackbarView('Você está apenas visualizando para Editar/Excluir, sai dessa aba!!')
  }

  cancel(): void {
    this.router.navigate(['/ramais']);
  }
}
