import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ramais } from 'src/app/model/ramais.model';
import { RamaisService } from 'src/app/services/ramais.service';

@Component({
  selector: 'app-ramais-add',
  templateUrl: './ramais-add.component.html',
  styleUrls: ['./ramais-add.component.css']
})
export class RamaisAddComponent implements OnInit {

  ramais: Ramais = {
    nome:'',
    setor: '',
    ramal: '',

  }

  constructor(private ramaisService: RamaisService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createRamais(): void {
    this.ramaisService.create(this.ramais).subscribe(() =>{
      this.ramaisService.snackbarSuccess('Operação Executada com sucesso')
      this.router.navigate(['/ramais'])
    },err => {
      this.ramaisService.snackbarError('Error:' + {err})
    });
  }
  cancel(): void {
    this.router.navigate(['/ramais'])
  }
}

