import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ramais } from 'src/app/model/ramais.model';
import { RamaisService } from 'src/app/services/ramais.service';

@Component({
  selector: 'app-ramais-edit',
  templateUrl: './ramais-edit.component.html',
  styleUrls: ['./ramais-edit.component.css']
})
export class RamaisEditComponent implements OnInit {

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

  updateRamais(): void {
    this.ramaisService.update(this.ramais).subscribe(() => {
      this.ramaisService.snackbarSuccess('Produto alterado com sucesso!');
      this.router.navigate(['/ramais']);
    },err => {
      this.ramaisService.snackbarError(err)
    });
  }

  cancel(): void {
    this.router.navigate(['/ramais']);
  }
}
