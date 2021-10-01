import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Aniversariante } from '../model/aniversariante.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AniversarianteService {
    baseUrl = `${environment.backendnest}aniversariantes`;


    constructor(private http: HttpClient,private snackBar: MatSnackBar) { }
  
  
    create(aniversariante: Aniversariante): Observable<Aniversariante> {
      return this.http.post<Aniversariante>(`${environment.backendnest}aniversariantes`, aniversariante);
    }
  
    read(): Observable<Aniversariante[]> {
      return this.http.get<Aniversariante[]>(`${environment.backendnest}aniversariantes`);
    }
  
    readById(_id: string): Observable<Aniversariante> {
      return this.http.get<Aniversariante>(`${environment.backendnest}aniversariantes/${_id}`);
    }
  
    update(aniversariante: Aniversariante): Observable<Aniversariante> {
      const url = `${this.baseUrl}/${aniversariante._id}`;
      return this.http.put<Aniversariante>(url, aniversariante);
    }
    delete(_id: string): Observable<Aniversariante> {
      const url = `${environment.backendnest}aniversariantes/${_id}`;
      return this.http.delete<Aniversariante>(url);
    }
    
    snackbarSuccess(msg: string) {
      this.snackBar.open(msg, '',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
        panelClass: ['snack-bar-sucess']
      },);
    }
  
    snackbarError(msg: string) {
      this.snackBar.open(msg, '',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
        panelClass: ['snack-bar-err']
      },);
    }
    snackbarView(msg: string) {
      this.snackBar.open(msg, '',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
        panelClass: ['snack-bar-view']
      },);
    }
    
  }
  