import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ramais } from 'src/app/model/ramais.model';
import { RamaisService } from 'src/app/services/ramais.service';

@Component({
  selector: 'app-ramais-delete',
  templateUrl: './ramais-delete.component.html',
  styleUrls: ['./ramais-delete.component.css']
})
export class RamaisDeleteComponent implements OnInit {

  ramais!: Ramais;

  constructor(
    private ramaisService: RamaisService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')|| '';
    this.ramaisService.readById(id).subscribe((ramais) => {
      this.ramais = ramais;
    },err => {
      this.ramaisService.snackbarError(err)
    });
  }

  deleteRamal(): void {
    this.ramaisService.delete(`${this.ramais._id}`).subscribe(() => {
      this.ramaisService.snackbarSuccess('Ramal excluido com sucesso');
      this.router.navigate(['/ramais']);
    },err => {
      this.ramaisService.snackbarError(err)
    });
  }
  cancel(): void {
    this.router.navigate(['ramais']);
  }
}
