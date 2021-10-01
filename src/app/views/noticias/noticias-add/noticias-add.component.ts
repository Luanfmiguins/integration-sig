import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias } from 'src/app/model/noticias.model';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias-add',
  templateUrl: './noticias-add.component.html',
  styleUrls: ['./noticias-add.component.css']
})
export class NoticiasAddComponent implements OnInit {

  noticias: Noticias = {
    status:'',
    titulo:'',
    text:'',
    data:''

  }

  date = new Date

  constructor(private noticiasService: NoticiasService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createNoticias(): void {
    this.noticiasService.create(this.noticias).subscribe(() =>{
      this.noticiasService.snackbarSuccess('Operação Executada com sucesso')
      this.router.navigate(['/noticias'])
    },err => {
      this.noticiasService.snackbarError(err)
    });
  }
  cancel(): void {
    this.router.navigate(['/noticias'])
  }
}